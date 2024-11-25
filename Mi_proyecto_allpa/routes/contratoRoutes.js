const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

// Ruta para obtener los detalles de un contrato
router.get('/detalle', contratoController.obtenerDetallesContrato);

// Ruta para actualizar el estado del contrato
router.put('/estado', contratoController.actualizarEstadoContrato);

module.exports = router;
