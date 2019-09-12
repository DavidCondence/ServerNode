const Pedidos = require("../schemas/Pedidos.schema");
module.exports.getPedidos = () => {

}
module.exports.savePedido = (pedido) => {
    return new Promise((resolve, reject) => {
        Pedidos.find({}, (err, result)=>{ 
            if(err){
                reject("Trono: "+ err);
            } else {
                resolve(resolve);
            }
        });
    });
}
module.exports.getPedidos = () => {
    
}