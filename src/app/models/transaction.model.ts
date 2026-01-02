export enum TypeTransaction {
    Depot = 'Depot',
    Retrait = 'Retrait',
    Virement = 'Virement'
}

export interface Transaction {
    id?: number;
    montant: number;
    dateTransaction: string;
    type: TypeTransaction;
    numeroCompteSource?: string;
    numeroCompteDestination?: string;
}