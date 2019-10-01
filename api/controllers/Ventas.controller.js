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
    postVentas(req, res){
        let venta = req.body;
        VentasRepository.saveVenta(venta).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    putVentas(req, res){
        let pedido = req.body;
        for (const pedidoGuardado of pedidos) {
            if(pedidoGuardado.id === pedido.id){
                pedidoGuardado.cliente = pedido.cliente;
                pedidoGuardado.total = pedido.total;
                res.status(200).json("Pedido actualizado");
                return;
            }
        }
        res.status(404).json("Pedido no encontrado");
    },
    deletePedidos(req, res){
        let idPedido = req.params.idPedido;
        for (let i=0; i<pedidos.length;i++) {
            let pedidoGuardado = pedidos[i];
            if(pedidoGuardado.id == idPedido){
                pedidos.splice(i, 1);
                res.status(200).json("Pedido eliminado");
                return;
            }
        }
        res.status(404).json("Pedido no encontrado");
    }
};