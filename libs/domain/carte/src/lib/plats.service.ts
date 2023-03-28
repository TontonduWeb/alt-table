import { ErrorMessage, Plat, P } from './plats';
import { PlatRepository } from './plats.repository';

export class PlatService {
  private readonly platRepository: PlatRepository;
  constructor(platRepository?: PlatRepository) {
    this.platRepository = platRepository || new PlatRepository();
  }

  isBodyType(body: P): body is P {
    return (
      typeof body.nom === 'string' &&
      typeof body.description === 'string' &&
      typeof body.type === 'string' &&
      typeof body.prix === 'number' &&
      typeof body.quantite === 'number'
    );
  }

  async findAll(): Promise<Plat[]> {
    return this.platRepository.findAll();
  }
  async create(plat: P): Promise<P | ErrorMessage> {
    if (!this.isBodyType(plat)) {
      return { message: 'Bad request' };
    }
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
