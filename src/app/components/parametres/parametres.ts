import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GesadminService } from '../../services/gesadmin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LucideAngularModule, User, Lock, Save, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-parametres',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './parametres.html',
  styleUrl: './parametres.css',
})
export class Parametres {
  readonly UserIcon = User;
  readonly LockIcon = Lock;
  readonly SaveIcon = Save;

  private fb = inject(FormBuilder);
  private adminService = inject(GesadminService);
  private snack = inject(MatSnackBar);

  profileForm!: FormGroup;
  passwordForm!: FormGroup;

  ngOnInit(): void {
    // Initialisation du formulaire de profil (à remplir avec les infos de l'utilisateur connecté)
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required]
    });

    // Initialisation du formulaire de mot de passe
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
  }

  updateProfile() {
    if (this.profileForm.valid) {
      this.adminService.updateSelf(this.profileForm.value).subscribe({
        next: () => this.snack.open("Profil mis à jour !", "OK", { duration: 3000 }),
        error: () => this.snack.open("Erreur de mise à jour", "X", { duration: 3000 })
      });
    }
  }

  updatePassword() {
    if (this.passwordForm.valid) {
      this.adminService.changePassword(this.passwordForm.value).subscribe({
        next: () => {
          this.snack.open("Mot de passe modifié avec succès", "OK", { duration: 3000 });
          this.passwordForm.reset();
        },
        error: (err) => this.snack.open(err.error || "Ancien mot de passe incorrect", "X", { duration: 3000 })
      });
    }
  }
}