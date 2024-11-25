const Pedido = require('../models/Pedido');

class PedidoController {
  constructor() {
    // Inicialización de pedidos de ejemplo
    const producto1 = new Producto(1, 'Laptop', 'Electrónico', 50);
    const producto2 = new Producto(2, 'Smartphone', 'Electrónico', 100);
    this.pedido = new Pedido(123, [producto1, producto2], 1500, 'Finalizado', new Date(), { nombre: 'Carlos Gómez' });
  }






  // Crear un pedido
  async crearPedido(req, res) {
    const { productos, direccion } = req.body;

    // Validar que los productos y la dirección están presentes
    if (!productos || productos.length === 0) {
      return res.status(400).json({ error: "Debe agregar al menos un producto al pedido" });
    }
    if (!direccion) {
      return res.status(400).json({ error: "La dirección es obligatoria" });
    }

    // Generar un nuevo idPedido de forma sencilla (en un sistema real, se usaría un generador único)
    const idPedido = `${Date.now()}`;

    const nuevoPedido = new Pedido(idPedido, productos, direccion);

    try {
      // Registrar el pedido
      await this.pedidoService.registrarPedido(nuevoPedido);
      return res.status(201).json({ message: 'Pedido creado exitosamente', pedido: nuevoPedido });
    } catch (error) {
      return res.status(500).json({ error: 'Error al registrar el pedido', detalles: error.message });
    }
  }

  // Método para ver los detalles de los pedidos finalizados
  obtenerDetallesPedido(req, res) {
    try {
      const detallesPedido = this.pedido.obtenerDetallesPedido();
      return res.status(200).json(detallesPedido);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Método para actualizar el estado de un pedido
  cambiarEstadoPedido(req, res) {
    const { nuevoEstado } = req.body;
    try {
      this.pedido.cambiarEstadoPedido(nuevoEstado);
      return res.status(200).json({ mensaje: 'Estado del pedido actualizado con éxito' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }




}

module.exports = PedidoController;
