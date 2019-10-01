const ClientesRepository = require("../persistence/repositories/Clientes.repository");

module.exports = {
    getClientes(req, res) {        
        try{
            ClientesRepository.getClientes().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    postClientes(req, res){
        let cliente = req.body;
        ClientesRepository.saveCliente(cliente).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    }
};