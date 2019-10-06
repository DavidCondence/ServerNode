const Productos = require("../schemas/Productos.schema");

module.exports.getProductos = function(){
    return new Promise((resolve, reject) => {
        Productos.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}
module.exports.getProducto = function(idProducto) {
    return new Promise((resolve, reject) => {
        Productos.findById(idProducto, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 

module.exports.saveProductos = function(producto){
    return new Promise((resolve, reject)=>{
        const productoAGuardar = new Productos(producto);
        productoAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}
module.exports.deleteProducto = function(productoid) { 
    return new Promise((resolve, reject) => {
        Productos.findByIdAndDelete(productoid, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 

module.exports.putProducto = function(idproducto, producto){ 
    return new Promise((resolve, reject)=>{ 
        Productos.findByIdAndUpdate(idproducto,{$set: producto},{new: true}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}