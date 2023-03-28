export interface P {
  nom: string;
  description: string;
  type: 'Apéritif' | 'Entree' | 'Plat principal' | 'Dessert' | 'Boisson';
  prix: number;
  quantite: number;
}

export class Plat {
  nom: string;
  description: string;
  type: 'Apéritif' | 'Entree' | 'Plat principal' | 'Dessert' | 'Boisson';
  prix: number;
  quantite: number;

  constructor(
    nom: string,
    description: string,
    type: 'Apéritif' | 'Entree' | 'Plat principal' | 'Dessert' | 'Boisson',
    prix: number,
    quantite: number
  ) {
    this.nom = nom;
    this.description = description;
    this.type = type;
    this.prix = prix;
    this.quantite = quantite;
  }
}

export interface ErrorMessage {
  message: string;
}
