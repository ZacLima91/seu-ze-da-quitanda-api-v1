import mongoose from 'mongoose';

const validObjectBody = (req, res, next) => {
  const fruta = req.body
  if (
    !fruta ||
    !fruta.nome ||
    !fruta.descricao ||
    !fruta.foto ||
    !fruta.preco
  ) {
    return res.status(404).send({ message: 'Preencha todos os campos!' });
  }
  next()
};

export default validObjectBody;
