import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { ClientList } from './components/client/client-list/client-list';
import { Compte } from './components/compte/compte';
import { Transaction } from './components/transaction/transaction';   
import { ClientAdd } from './components/client/client-add/client-add';
import { AdminLayout } from './components/admin-component/admin-component';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
        path: '',
        component: AdminLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'client', component: ClientList },
            { path: 'client/ajouter', component: ClientAdd },
            { path: 'compte', component: Compte },
            { path: 'transaction', component: Transaction },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]   
    },
    { path: '**', redirectTo: 'login' }
];