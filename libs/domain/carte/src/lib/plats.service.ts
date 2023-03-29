import { ErrorMessage, Plat, Type } from './plats';
import { PlatRepository } from './plats.repository';

export class PlatService {
  private readonly platRepository: PlatRepository;
  constructor(platRepository?: PlatRepository) {
    this.platRepository = platRepository || new PlatRepository();
  }

  isBodyType(body: Plat): body is Plat {
    return (
      (typeof body.nom === 'string' &&
        typeof body.description === 'string' &&
        typeof body.type === 'string' &&
        typeof body.prix === 'number' &&
        typeof body.quantite === 'number') ||
      typeof body.quantite === 'undefined'
    );
  }

  async findAll(): Promise<Plat[]> {
    return this.platRepository.findAll();
  }
  async create(plat: Plat): Promise<Plat | ErrorMessage> {
    if (
      plat.nom == null ||
      plat.description == null ||
      plat.type == null ||
      plat.prix == null
    ) {
      return {
        message:
          'Plat non valide : nom, description, type et prix obligatoires',
      };
    }
    if (!this.isBodyType(plat)) {
      return { message: 'Plat non valide' };
    }
    if (
      plat.type != Type.Aperitif &&
      plat.type != Type.Boisson &&
      plat.type != Type.Dessert &&
      plat.type != Type.Entree &&
      plat.type != Type.Plat
    ) {
      return {
        message:
          'Type de plat non valide, il doit être Apéritif, Boisson, Dessert, Entrée ou Plat principal',
      };
    }
    if (plat.quantite == undefined) {
      plat.quantite = 0;
    }
    plat.prix = parseFloat(plat.prix.toFixed(2));
    return this.platRepository.create(plat);
  }
  async findOne(id: string): Promise<Plat | ErrorMessage> {
    return this.platRepository.findOne(id);
  }
  async update(nom: string, quantite: number): Promise<Plat | ErrorMessage> {
    return this.platRepository.update(nom, quantite);
  }
  async updateClient(plats: Plat[]): Promise<Plat[] | ErrorMessage> {
    return this.platRepository.updateClient(plats);
  }
}
