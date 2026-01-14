import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../../env/env';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly apiUrl = `${env.apiUrl}/transaction`;
  constructor(private http: HttpClient) {}

  deposer(numeroCompte: string, montant: number): Observable<string> {
  const dto = {
    numeroCompteDestination: numeroCompte,
    solde: montant
  };
  return this.http.post(`${this.apiUrl}/deposer`, dto, { responseType: 'text' });
}
}