import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  History, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Send,
  Download,
  X,
  Mail
} from 'lucide-angular';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-compte-history',
  standalone: true,
  imports: [
    CommonModule, 
    LucideAngularModule, 
    DatePipe, 
    DecimalPipe
  ],
  templateUrl: './transaction-compte-history.html',
  styleUrl: './transaction-compte-history.css',
})
export class TransactionCompteHistory implements OnInit {
  readonly ArrowLeft = ArrowLeft;
  readonly History = History;
  readonly ArrowUpCircle = ArrowUpCircle;
  readonly ArrowDownCircle = ArrowDownCircle;
  readonly Send = Send;
  readonly Download = Download;
  readonly X = X;
  readonly Mail = Mail;

  transactions = signal<any[]>([]);
  sendingEmail = signal(false);
  loading = signal(true);
  compteId: string | null = null;
  clientId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('clientId');
    this.compteId = this.route.snapshot.paramMap.get('compteId');
    if (this.compteId) {
      this.fetchHistory(this.compteId);
    }
    console.log(this.compteId)
  }
  
  fetchHistory(iban: string): void {
    this.loading.set(true);
    this.transactionService.getHistorique(iban).subscribe({
      next: (data) => {
        console.log('Données reçues du backend :', data);
        const sorted = data.sort((a, b) => 
          new Date(b.dateTransaction).getTime() - new Date(a.dateTransaction).getTime()
        );
        this.transactions.set(sorted);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur de chargement:', err);
        this.loading.set(false);
      }
    });
  }

  goBack(): void {
    window.history.back();
  }

  getTypeStyles(type: string): string {
    switch (type) {
    case 'Depot': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    case 'Retrait': return 'bg-orange-50 text-orange-600 border-orange-100';
    case 'Virement': return 'bg-blue-50 text-blue-600 border-blue-100';
    default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  }

  sendStatement(): void {
    if (!this.compteId) return;

    this.sendingEmail.set(true);

    this.transactionService.envoyerReleve(this.compteId).subscribe({
      next: (response) => {
        this.snackBar.open(response.message, 'Fermer', { duration: 3000 });
        this.sendingEmail.set(false);
      },
      error: (err) => {
        console.error('Erreur envoi email:', err);
        this.snackBar.open("Une erreur est survenue lors de l'envoi du relevé.", 'Fermer', { duration: 3000 });
        this.sendingEmail.set(false);
      }
    });
  }
}