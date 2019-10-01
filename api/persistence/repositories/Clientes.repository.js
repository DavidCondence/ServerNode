const Clientes = require("../schemas/Clientes.schema");

module.exports.getClientes = function(){
    return new Promise((resolve, reject) => {
        Clientes.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}
module.exports.saveCliente = function(cliente){
    return new Promise((resolve, reject)=>{
        const clienteAGuardar = new Clientes(cliente);
        clienteAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}