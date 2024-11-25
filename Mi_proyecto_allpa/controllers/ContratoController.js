const Contrato = require('../models/Contrato');
const Producto = require('../models/Producto');




class ContratoController {
  constructor() {
    // Inicialización de los contratos y productos para demostración
    const producto1 = new Producto(1, 'Laptop', 'Electrónico', 50);
    const producto2 = new Producto(2, 'Smartphone', 'Electrónico', 100);
    this.contrato = new Contrato(101, [producto1, producto2], 'Pendiente');
  }

  // Método para que el vendedor obtenga detalles del contrato
  obtenerDetallesContrato(req, res) {
    try {
      const detallesContrato = this.contrato.obtenerDetallesContrato();
      return res.status(200).json(detallesContrato);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Método para actualizar el estado del contrato
  actualizarEstadoContrato(req, res) {
    const { nuevoEstado } = req.body;
    try {
      this.contrato.actualizarEstadoContrato(nuevoEstado);
      return res.status(200).json({ mensaje: 'Estado del contrato actualizado con éxito' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }



  // Método para firmar un contrato
  firmarContrato(req, res) {
    const { idContrato } = req.params;  // Se espera que el vendedor pase el id del contrato
    const vendedor = req.usuario;  // El vendedor autenticado es el que firma el contrato

    if (!(vendedor instanceof Vendedor)) {
      return res.status(403).json({ error: 'Solo los vendedores pueden firmar contratos' });
    }

    try {
      const contratoFirmado = this.contratoService.firmarContrato(idContrato, vendedor);
      return res.status(200).json({ message: contratoFirmado });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Método para obtener los detalles de un contrato
  obtenerDetallesContrato(req, res) {
    const { idContrato } = req.params;

    try {
      const detalles = this.contratoService.obtenerDetallesContrato(idContrato);
      return res.status(200).json({ contrato: detalles });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContratoController;
