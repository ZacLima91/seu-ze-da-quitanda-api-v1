import frutasServices from '../services/frutas.services.js';

const findAllFrutasController = (req, res) => {
  const frutas = frutasServices.findAllFrutasServices();
  if(frutas.length == 0 ){
    return res.status(404).send({ message: 'Não existe nenhuma fruta cadastrada!' });
  }
  res.send(frutas);
};

const findByIdFrutasController = (req, res) => {
  const parametroId = Number(req.params.id);

  if(!parametroId){
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const escolhaFrutas = frutasServices.findByIdFrutasService(parametroId);
  
  if(!escolhaFrutas){
    return res.status(400).send({ message: 'Fruta não encontrada!' });
  }
  res.send(escolhaFrutas);
};

const createFrutaController = (req, res) => {
  const fruta = req.body;

  if (!fruta || !fruta.nome || !fruta.descricao || !fruta.foto || !fruta.preco) {
    return res.status(404).send({ message: 'Fruta não encontrada!' });
  }
  const newFruta = frutasServices.createFrutaService(fruta);
  res.status(201).send(newFruta);
};

const updateFrutaController = (req, res) => {
  const idParam = Number(req.params.id);
  const frutaEdit = req.body;

  const updateFruta = frutasServices.updateFrutaService(idParam, frutaEdit);
  res.send(updateFruta);
};

const deleteFrutaController = (req, res) => {
  const idParam = Number(req.params.id);
  if(!idParam){
    return res.status(400).send({ message: 'Id inválido!' });
  }
  frutasServices.deleteFrutaService(idParam);
  res.send({ message: 'Fruta deletada com sucesso!' });
};
export default {
  findAllFrutasController,
  findByIdFrutasController,
  createFrutaController,
  updateFrutaController,
  deleteFrutaController,
};
