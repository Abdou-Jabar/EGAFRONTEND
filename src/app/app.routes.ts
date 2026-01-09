import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Client } from './components/client/client-list/client-list';
import { Compte } from './components/compte/compte';
import { Transaction } from './components/transaction/transaction';   
import { ClientAdd } from './components/client/client-add/client-add';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'client', component: Client },
    { path: 'client/ajouter', component: ClientAdd },
    { path: 'compte', component: Compte },
    { path: 'transaction', component: Transaction },
];
