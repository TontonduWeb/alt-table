export class Plat {
  nom: string;
  description: string;
  type: Type;
  prix: number;
  quantite?: number;

  constructor(
    nom: string,
    description: string,
    type: Type,
    prix: number,
    quantite?: number
  ) {
    this.nom = nom;
    this.description = description;
    this.type = type;
    this.prix = prix;
    this.quantite = quantite;
  }
}

export enum Type {
  Aperitif = 'Apéritif',
  Entree = 'Entrée',
  Plat = 'Plat principal',
  Dessert = 'Dessert',
  Boisson = 'Boisson',
}

export interface ErrorMessage {
  message: string;
}
