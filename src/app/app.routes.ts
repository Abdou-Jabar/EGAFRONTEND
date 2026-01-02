import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Client } from './components/client/client';
import { Compte } from './components/compte/compte';
import { Transaction } from './components/transaction/transaction';   

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'clients', component: Client },
    { path: 'comptes', component: Compte },
    { path: 'transactions', component: Transaction },
];
