import { ErrorMessage, Plat, P } from './plats';
import { PlatService } from './plats.service';

export class PlatController {
  private platService: PlatService;
  constructor(platService?: PlatService) {
    this.platService = platService || new PlatService();
  }
  async findAll(): Promise<Plat[]> {
    return await this.platService.findAll();
  }
  async create(plat: P): Promise<P | ErrorMessage> {
    return await this.platService.create(plat);
  }
  async findOne(nom: string): Promise<Plat | ErrorMessage> {
    return await this.platService.findOne(nom);
  }
  async update(nom: string, quantite: number): Promise<Plat | ErrorMessage> {
    return await this.platService.update(nom, quantite);
  }

  async updateClient(plats: Plat[]): Promise<Plat[] | ErrorMessage> {
    return await this.platService.updateClient(plats);
  }
}
