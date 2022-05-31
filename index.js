import express from 'express';
import cors from 'cors';
import routes from './src/routers/fruta.route.js'
import connectToDataBase from './src/database/database.js'

const app = express();
const port = 3000;

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/frutas', routes);




app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
