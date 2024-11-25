const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/PedidoController');

// Ruta para obtener los detalles de un pedido finalizado
router.get('/detalle', pedidoController.obtenerDetallesPedido);

// Ruta para cambiar el estado de un pedido
router.put('/estado', pedidoController.cambiarEstadoPedido);

module.exports = router;
