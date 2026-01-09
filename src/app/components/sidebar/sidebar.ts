import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutDashboard,
  LucideAngularModule,
  Users,
  Wallet,
  ArrowLeftRight,
  FileText,
  Settings,
  LogOut,
  Building2 
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  readonly Building2 = Building2;
  menuItems = [
    { label: 'Tableau de bord', icon: LayoutDashboard, route: '/dashboard' },
    { label: 'Clients', icon: Users, route: '/client' },
    { label: 'Comptes', icon: Wallet, route: '/compte' },
    { label: 'Transactions', icon: ArrowLeftRight, route: '/transaction' },
  ];
}