const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const ClientesSchema = new Schema({
    rfc: { 
        type: String,
        index: {unique: true}
    },
    nombre: { type: String },
    direccion: { type: String },
    telefonos: [{
        telefono1: { type: String },
        telefono2: { type: String }
    }]
}, { timestamps: true });  
module.exports = mongoose.model("Clientes", ClientesSchema, "clientes");