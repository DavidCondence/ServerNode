const Pedidos = require("../schemas/Pedidos.schema");

module.exports.getPedidos = function(){
    return new Promise((resolve, reject) => {
        Pedidos.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}

module.exports.savePedido = function(pedido){
    return new Promise((resolve, reject)=>{
        const pedidoAGuardar = new Pedidos(pedido);
        pedidoAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}