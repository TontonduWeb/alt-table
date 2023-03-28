import { ErrorMessage, Plat, P } from './plats';

export class PlatRepository {
  private plats: Plat[] = [];

  public findAll(): Plat[] {
    return this.plats;
  }

  public create(plat: P): Plat | ErrorMessage {
    if (this.plats.find((p) => p.nom == plat.nom)) {
      return {
        message: 'Plat deja existant',
      };
    }
    this.plats.push(plat);
    return plat;
  }

  public findOne(nom: string): Plat | ErrorMessage {
    const plat = this.plats.find((plat) => nom == plat.nom);
    if (!plat) {
      return {
        message:
          'Plat non trouve, essaye une autre orthographe, ou commence par chercher tous les plats sur le endpoint /api/plats',
      };
    }
    return plat;
  }
  public update(nom: string, quantite: number): Plat | ErrorMessage {
    const platToUpdate = this.plats.find((plat) => nom == plat.nom);
    if (!platToUpdate) {
      return {
        message:
          'Plat non trouve, pour modifier une quantite, essaye une autre orthographe, ou commence par chercher tous les plats sur le endpoint /api/plats',
      };
    }
    platToUpdate.quantite = quantite;
    return platToUpdate;
  }
  public updateClient(platsReq: Plat[]): Plat[] | ErrorMessage {
    const platsInconnus = platsReq.filter(
      (platReq) => !this.plats.find((plat) => platReq.nom == plat.nom)
    );
    const platsConnus = platsReq.filter((platReq) =>
      this.plats.find((plat) => platReq.nom == plat.nom)
    );
    if (platsConnus) {
      platsConnus.forEach((platConnu) => {
        const plat = this.plats.find((plat) => platConnu.nom == plat.nom);
        if (plat!.quantite < platConnu.quantite) {
          console.log('Quantité insuffisante');
          return {
            message: `Plat ${platConnu.nom} en quantite insuffisante`,
          };
        }
        if (plat && plat.quantite > platConnu.quantite) {
          plat.quantite = plat.quantite - platConnu.quantite;
        }
        console.log('Plat mis a jour');
        return plat;
      });
    }
    if (platsInconnus.length > 0) {
      return {
        message: `Plats inconnus : ${platsInconnus
          .map((plat) => plat.nom)
          .join(', ')}`,
      };
    }
    return this.plats;
  }
}
