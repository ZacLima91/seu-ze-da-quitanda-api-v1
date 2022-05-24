import express from 'express';
import controllerFrutas from '../controllers/fruta.controller.js';
const route = express.Router();

route.get('/todas-frutas', controllerFrutas.findAllFrutasController);
route.get('/fruta/:id', controllerFrutas.findByIdFrutasController);
route.post('/create', controllerFrutas.createFrutaController);
route.put('/update/:id', controllerFrutas.updateFrutaController);
route.delete('/delete/:id', controllerFrutas.deleteFrutaController);

export default route;
