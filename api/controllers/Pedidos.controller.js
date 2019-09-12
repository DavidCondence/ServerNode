const pedidos = [
    {id: 123, cliente: "Tony Stark", total: 1500},
    {id: 456, cliente: "Natalia Romanov", total: 3500},
    {id: 658, cliente: "Steve Rogers", total: 1500},
    {id: 524, cliente: "Wanda Maximof", total: 2600}
];
module.exports = {
    getPedidos(req, res) {
        res.send(pedidos);
    },
    postPedidos(req, res){
        let pedido = req.body;
        pedidos.push(pedido);
        res.send("Pedido guardado");
    },
    putPedidos(req,res){
        let pedido = req.body;
        for(const pedidoGuardado of pedidos){
            if(pedidoGuardado.id === pedido.id){
                pedidoGuardado.cliente = pedido.cliente;
                pedidoGuardado.total = pedido.total; 
                res.status(200).json("Pedido actualizado.");
                return;
            }
        }  
        res.status(404).json("No se encontro el pedido.");
    },
    deletePedidos(req, res){
        let idPedido = req.params.idPedido;
        for(let i=0; i<pedidos.lenght; i++){
            let pedidoGuardado = pedidos[i];
            if(pedidoGuardado.id == idPedido){
                pedidos.splice(i,1);
                res.status(200).json("Pedido eliminado.");
                return;
            }
        }   
        res.status(404).json("No se encontro el pedido.");
    }
};