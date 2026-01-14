import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { ClientList } from './components/client/client-list/client-list';
import { CompteList } from './components/compte/compte-list/compte-list';
import { CompteListClient } from './components/compte/compte-list-client/compte-list-client';
import { Transaction } from './components/transaction/transaction';   
import { ClientAdd } from './components/client/client-add/client-add';
import { AdminLayout } from './components/admin-component/admin-component';
import { ClientEdit } from './components/client/client-edit/client-edit';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
        path: '',
        component: AdminLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'client', component: ClientList },
            { path: 'client/ajouter', component: ClientAdd },
            { path: 'client/:id/comptes', component: CompteListClient },
            { path: 'compte', component: CompteList },
            { path: 'transaction', component: Transaction },
            { path: 'client/modifier/:id', component: ClientEdit },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]   
    },
    { path: '**', redirectTo: 'login' }
];