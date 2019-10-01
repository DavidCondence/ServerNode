const express = require("express");
const router = express.Router();
const pedidosController = require("../api/controllers/Pedidos.controller");
const clientesController = require("../api/controllers/Clientes.controller");
const ventasController = require("../api/controllers/Ventas.controller");
router.get("/pedidos", pedidosController.getPedidos);
router.post("/pedidos", pedidosController.postPedidos);
router.put("/pedidos", pedidosController.putPedidos);
router.delete("/pedidos/:idPedido", pedidosController.deletePedidos);


router.get("/clientes", clientesController.getClientes);
router.post("/clientes", clientesController.postClientes);

router.get("/ventas", ventasController.getVentas);
router.post("/ventas", ventasController.postVentas);
module.exports = router;