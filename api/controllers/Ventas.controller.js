const VentasRepository = require("../persistence/repositories/Ventas.repository");

module.exports = {
    getVentas(req, res) {        
        try{
            VentasRepository.getVentas().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    getVenta(req, res) {
        let idVenta = req.params.idVenta;
        try{
            VentasRepository.getVenta(idVenta).then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }               
    },
    postVentas(req, res){
        let venta = req.body;
        VentasRepository.saveVenta(venta).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    putVenta(req, res){
        let venta = req.body;
        let idVenta = req.params.idVenta;
        VentasRepository.putVenta(idVenta, venta).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });   
    },
    deleteVenta(req, res) {
        let idVenta = req.params.idVenta;
        try{
            VentasRepository.deleteVenta(idVenta).then((result)=>{
                res.status(200).json("Venta eliminada");
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }               
    }
};