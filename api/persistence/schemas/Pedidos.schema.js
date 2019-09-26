const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PedidosSchema = new Schema({
    cliente: { type: String, required: true },
    articulos: [{
        nombre: { type: String },
        precio: { type: Number },
        cantidad: { type: Number },
        subtotal: { type: Number }
    }],
    total: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Pedidos", PedidosSchema, "pedidos");