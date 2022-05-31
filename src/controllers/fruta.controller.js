import mongoose from 'mongoose';
import frutasServices from '../services/frutas.services.js';

const findAllFrutasController = async (req, res) => {
  const allFrutas = await frutasServices.findAllFrutasServices();
  if (allFrutas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma fruta cadastrada!' });
  }
  res.send(allFrutas);
};

const findByIdFrutasController = async (req, res) => {
  const idParam = req.params.id;
  const chosenFrutas = await frutasServices.findByIdFrutasService(idParam);
  if (!chosenFrutas) {
    return res.status(400).send({ message: 'Fruta não encontrada!' });
  }
  res.send(chosenFrutas);
};

const createFrutaController = async (req, res) => {
  const fruta = req.body;

  const newFruta = await frutasServices.createFrutaService(fruta);
  res.status(201).send(newFruta);
};

const updateFrutaController = async (req, res) => {
  const idParam = req.params.id;
  const editFruta = req.body;
  const updateFruta = await frutasServices.updateFrutaService(
    idParam,
    editFruta,
  );
  res.send(updateFruta);
};

const deleteFrutaController = async (req, res) => {
  const idParam = req.params.id;
  await frutasServices.deleteFrutaService(idParam);
  res.send({ message: 'Fruta deletada com sucesso!' });
};
export default {
  findAllFrutasController,
  findByIdFrutasController,
  createFrutaController,
  updateFrutaController,
  deleteFrutaController,
};
