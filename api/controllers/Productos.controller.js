const ProductosRepository = require("../persistence/repositories/Productos.repository");

module.exports = {
    getProductos(req, res) {        
        try{
            ProductosRepository.getProductos().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    getProducto(req, res) {
        let idProducto = req.params.idProducto;
        try{
            ProductosRepository.getProducto(idProducto).then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }               
    },
    postProducto(req, res){
        let producto = req.body;
        ProductosRepository.saveProductos(producto).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    putProducto(req, res){
        let producto = req.body;
        let idProducto = req.params.idProducto;
        ProductosRepository.putProducto(idProducto, producto).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });   
    },
    deleteProducto(req, res) {
        let idProducto = req.params.idProducto;
        try{
            ProductosRepository.deleteProducto(idProducto).then((result)=>{
                res.status(200).json("Venta eliminada");
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }               
    }
};