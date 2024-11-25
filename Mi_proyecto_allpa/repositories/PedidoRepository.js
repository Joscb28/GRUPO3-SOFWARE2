const pedidos = [];

class PedidoRepository {
  // Simula guardar un pedido
  save(pedido) {
    pedidos.push(pedido);
    console.log('Pedido guardado:', pedido);
  }

  // Simula encontrar un pedido por ID
  findById(idPedido) {
    return pedidos.find(pedido => pedido.idPedido === idPedido);
  }
}

module.exports = PedidoRepository;
