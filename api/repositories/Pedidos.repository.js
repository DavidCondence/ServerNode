const Pedidos = require("../schemas/Pedidos.schema");
 
module.exports.getPedidos = () => {
    return new Promise((resolve, reject) => {
        Pedidos.find({}, (err, result)=>{ 
            if(err){
                reject("Trono: "+ err);
            } else {
                resolve(result);
            }
        });
    });
}
module.exports.savePedidos = (pedido) => {
    return new Promise((resolve, reject) => {
        const pedidoAGuardar = new Pedidos(pedido);
        pedidoAGuardar.save((err, result) =>{
            if(err){
                reject("Trono: "+ err);
            } else {
                resolve(result);
            }
        });
    });
}
