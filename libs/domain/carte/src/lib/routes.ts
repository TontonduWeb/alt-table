import { Application } from 'express';
import { PlatController } from './plats.controller';

const controller = new PlatController();
export const definePlatRoutes = (app: Application) => {
  app.get('/api/plats', async (req, res) => {
    const plats = await controller.findAll();
    res.send(plats);
  });
  app.post('/api/plat', async (req, res) => {
    const plat = await controller.create(req.body);
    res.send(plat);
  });
};
