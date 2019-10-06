const express = require("express");
const router = express.Router();
const pedidosController = require("../api/controllers/Pedidos.controller");
const clientesController = require("../api/controllers/Clientes.controller");
const ventasController = require("../api/controllers/Ventas.controller");
const productosController = require("../api/controllers/Productos.controller");

router.get("/pedidos", pedidosController.getPedidos);
router.post("/pedidos", pedidosController.postPedidos);
router.put("/pedidos", pedidosController.putPedidos);
router.delete("/pedidos/:idPedido", pedidosController.deletePedidos);
router.get("/clientes", clientesController.getClientes);
router.post("/clientes", clientesController.postClientes);


/* Ventas */
router.get("/ventas", ventasController.getVentas);
router.post("/ventas", ventasController.postVentas);
router.delete("/ventas/:idVenta", ventasController.deleteVenta);
router.get("/ventas/:idVenta", ventasController.getVenta);
router.put("/ventas/:idVenta", ventasController.putVenta);

/* productos */
router.get("/productos", productosController.getProductos);
router.get("/productos/:idProducto", productosController.getProducto);
router.post("/productos", productosController.postProducto);
router.delete("/productos/:idProducto", productosController.deleteProducto);
router.put("/productos/:idProducto", productosController.putProducto);
module.exports = router;