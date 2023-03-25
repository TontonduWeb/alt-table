import { Plat } from './plats';
import { PlatRepository } from './plats.repository';

export class PlatService {
  private readonly platRepository: PlatRepository;
  constructor(platRepository?: PlatRepository) {
    this.platRepository = platRepository || new PlatRepository();
  }

  async findAll(): Promise<Plat[]> {
    return this.platRepository.findAll();
  }
  async create(plat: Plat): Promise<Plat> {
    return this.platRepository.create(plat);
  }
}
