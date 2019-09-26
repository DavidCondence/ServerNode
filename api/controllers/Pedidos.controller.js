const PedidosRepository = require("../persistence/repositories/Pedidos.repository");

module.exports = {
    getPedidos(req, res) {        
        try{
            PedidosRepository.getPedidos().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    postPedidos(req, res){
        let pedido = req.body;
        PedidosRepository.savePedido(pedido).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    putPedidos(req, res){
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