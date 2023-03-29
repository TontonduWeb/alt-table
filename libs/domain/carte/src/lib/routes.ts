import { Application } from 'express';
import { Plat } from './plats';
import { PlatController } from './plats.controller';

const controller = new PlatController();
export const definePlatRoutes = (app: Application) => {
  app.get('/api/plats', async (req, res) => {
    const plats = await controller.findAll();
    res.send(plats);
  });
  app.post('/api/plat', async (req, res) => {
    const plat = await controller.create(req.body as Plat);
    res.send(plat as Plat);
  });
  app.get('/api/plat/:nom', async (req, res) => {
    const plat = await controller.findOne(req.params.nom);
    res.send(plat);
  });
  app.post('/api/plat/:nom', async (req, res) => {
    const plat = await controller.update(req.params.nom, req.body.quantite);
    res.send(plat);
  });
  app.post('/api/client', async (req, res) => {
    const plat = await controller.updateClient(req.body);
    res.send(plat);
  });
  app.get('/api/carte', async (req, res) => {
    const plats = await controller.findAll();
    const carte = plats.filter(
      (plat) => plat.quantite != undefined && plat.quantite > 0
    );
    res.send(carte);
  });
};
