const Ventas = require("../schemas/Ventas.schema");

module.exports.getVentas = function(){
    return new Promise((resolve, reject) => {
        Ventas.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}

module.exports.saveVenta = function(venta){
    return new Promise((resolve, reject)=>{
        const ventaAGuardar = new Ventas(venta);
        ventaAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}