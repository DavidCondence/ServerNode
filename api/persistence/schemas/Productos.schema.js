const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre: { type: String, required: true },
    precioactual: { type: Number, required: true },
    stock: { type: Boolean, required: true },
    categoria: {
        nombre: { type: String },
        descripcion: { type: String }
    },
    proveedores: {
        rfc: { type: String },
        nombre: { type: String },
        direccion: { type: String },
        telefono: { 
            type: Number,
            validate: {
                validator: function(v) {
                  return /^([0-9]{10}$)/.test(v);
                },
                message: '{VALUE} ingresar numero de 10 digitos.'
            }
        },
        paginaweb: { 
            type: String
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("Productos", ProductosSchema, "productos");