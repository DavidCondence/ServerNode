const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const VentasSchema = new Schema({
    fecha: { type: Date, default: Date.now() },
    descuento: { type: Number },
    montofinal: { type: Number },
    cliente: { 
        rfc: { type: String },
        nombre: { type: String },
        direccion: { type: String },
        telefono1: { 
            type: Number,
            validate: {
                validator: function(v) {
                  return /^([0-9]{10}$)/.test(v);
                },
                message: '{VALUE} ingresar numero de 10 digitos.'
            }
        },
        telefono2: { 
            type: Number,
            validate: {
                validator: function(v) {
                  return /^([0-9]{10}$)/.test(v);
                },
                message: '{VALUE} ingresar numero de 10 digitos.'
            }
             
        }
    }
}, { timestamps: true });  
module.exports = mongoose.model("Ventas", VentasSchema, "ventas");