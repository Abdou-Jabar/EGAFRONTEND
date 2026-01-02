export enum Sexe {
    Masculin = 'Masculin',
    Feminin = 'Feminin'
}

export interface Client {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    sexe: Sexe;
    telephone?: string;
    estSupprime: boolean;
}