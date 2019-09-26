const express = require("express");
const router = express.Router();
const pedidosController = require("../api/controllers/Pedidos.controller");

router.get("/pedidos", pedidosController.getPedidos);
router.post("/pedidos", pedidosController.postPedidos);
router.put("/pedidos", pedidosController.putPedidos);
router.delete("/pedidos/:idPedido", pedidosController.deletePedidos);

module.exports = router;