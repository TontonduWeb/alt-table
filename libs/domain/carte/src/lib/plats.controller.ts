import { Plat } from './plats';
import { PlatService } from './plats.service';

export class PlatController {
  private platService: PlatService;
  constructor(platService?: PlatService) {
    this.platService = platService || new PlatService();
  }
  async findAll(): Promise<Plat[]> {
    return await this.platService.findAll();
  }
  async create(plat: Plat): Promise<Plat> {
    return await this.platService.create(plat);
  }
}
