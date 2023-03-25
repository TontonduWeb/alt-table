import { Plat } from './plats';

export class PlatRepository {
  private plats: Plat[] = [];

  public findAll(): Plat[] {
    return this.plats;
  }

  public create(plat: Plat): Plat {
    this.plats.push(plat);
    return plat;
  }

  // public findOne(id: string): Plat {
  //     return this.plats.find(plat => plat._id === id);
  // }
}
