import express from 'express';
import controllerFrutas from '../controllers/fruta.controller.js';
import validId from '../middlewares/validId.middlewares.js';
import validObjectBody from '../middlewares/validObjectBody.middleware.js';
const route = express.Router();

route.get('/all-frutas', controllerFrutas.findAllFrutasController);
route.get('/one-fruta/:id', validId, controllerFrutas.findByIdFrutasController);
route.post('/create-fruta', validObjectBody, controllerFrutas.createFrutaController);
route.put('/update-fruta/:id', validId, validObjectBody, controllerFrutas.updateFrutaController);
route.delete(
  '/delete-fruta/:id',
  validId,
  controllerFrutas.deleteFrutaController,
);

export default route;
