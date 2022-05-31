import mongoose from 'mongoose';

const connectToDataBase = () => {
  mongoose.connect('mongodb://localhost:27017/frutas-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=> console.log("MongoDB Connect!")).catch((error)=> console.log(`Erro na conexão com o MongoDB, erro: ${error}`))
};

export default connectToDataBase;
