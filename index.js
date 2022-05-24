import express from 'express';
import cors from 'cors';
import routes from './src/routers/fruta.route.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/frutas', routes);




app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
