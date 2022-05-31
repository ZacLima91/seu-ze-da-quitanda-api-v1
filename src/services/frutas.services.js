
import Frutas from '../models/frutas.js';

const findAllFrutasServices = async () => {
  const allFrutas = await Frutas.find();
  return allFrutas;
};

const findByIdFrutasService = async (idParam) => {
  const oneFruta = await Frutas.findById(idParam);
  return oneFruta;
};

const createFrutaService = async (newFruta) => {
const createdFruta = await Frutas.create(newFruta)
  return createdFruta;
};

const updateFrutaService = async (idParam, editFruta) => {
  const updateFruta = await Frutas.findByIdAndUpdate(idParam, editFruta);
  
  return updateFruta;
};

const deleteFrutaService = async (idParam) => {
  return await Frutas.findByIdAndDelete(idParam)
};

export default {
  findAllFrutasServices,
  findByIdFrutasService,
  createFrutaService,
  updateFrutaService,
  deleteFrutaService,
};
