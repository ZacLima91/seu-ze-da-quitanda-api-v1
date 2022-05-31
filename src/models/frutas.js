import mongoose from "mongoose";

const FrutaSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    }
})

const Fruta = mongoose.model('frutas', FrutaSchema)

export default Fruta;
