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
module.exports.getVenta = function(ventaid) {
    return new Promise((resolve, reject) => {
        Ventas.findById(ventaid, (error, result)=>{
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
module.exports.deleteVenta = function(ventaid) {
    return new Promise((resolve, reject) => {
        Ventas.findByIdAndDelete(ventaid, (error, result)=>{
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
module.exports.putVenta = function(idventa, venta){ 
    return new Promise((resolve, reject)=>{ 
        Ventas.findByIdAndUpdate(idventa,{$set: venta},{new: true}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}