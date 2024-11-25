class PedidoService {
    constructor(pedidoRepository) {
      this.pedidoRepository = pedidoRepository;
    }
  
    // Método para registrar un pedido en el repositorio
    async registrarPedido(pedido) {
      // En un sistema real, aquí se guardaría el pedido en una base de datos
      this.pedidoRepository.save(pedido);
    }
  }
  
  module.exports = PedidoService;
  