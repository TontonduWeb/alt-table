import { ErrorMessage, Plat } from './plats';

export class PlatRepository {
  private plats: Plat[] = [];

  public findAll(): Plat[] {
    return this.plats;
  }

  public create(plat: Plat): Plat | ErrorMessage {
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
      for (const platConnu of platsConnus) {
        const platEnMemoire = this.plats.find((p) => platConnu.nom == p.nom);

        if (
          platConnu.quantite &&
          platEnMemoire?.quantite != undefined &&
          platEnMemoire.quantite >= platConnu.quantite
        ) {
          platEnMemoire.quantite -= platConnu.quantite;
          return {
            message: `Commande effectuee avec succes : ${platsConnus.map(
              (platEnMemoire) =>
                `${platEnMemoire.nom} : ${platEnMemoire.quantite}`
            )}`,
          };
        }
        if (
          platConnu.quantite &&
          platEnMemoire?.quantite != undefined &&
          platEnMemoire.quantite < platConnu.quantite
        )
          return {
            message: `Plat ${platsConnus.map(
              (platConnu) => platConnu.nom
            )} en rupture de stock)`,
          };
      }
    } else if (platsInconnus.length > 0) {
      return {
        message: `Plats inconnus : ${platsInconnus
          .map((platEnMemoire) => platEnMemoire.nom)
          .join(', ')}`,
      };
    }
    return {
      message: `Commande effectuee avec succes : ${platsConnus.map(
        (platEnMemoire) => `${platEnMemoire.nom} : ${platEnMemoire.quantite}`
      )}`,
    };
  }
}
