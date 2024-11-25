class Comprador extends Usuario {
    constructor(idUsuario, nombre, apellidoPaterno, contraseña, email, telContacto, fechaRegistro, userID) {
      super(idUsuario, nombre, apellidoPaterno, contraseña, email, telContacto);
      this.userID = userID;
      this.pedidos = []; // Almacena los pedidos realizados por el comprador
    }
  
    // Método para realizar el pago de un pedido
    realizarPago(pedido, metodoPago) {
      if (!pedido || pedido.estado !== 'Pendiente') {
        throw new Error('El pedido no está pendiente para pago');
      }
  
      const servicioPago = new ServicioPago();
      const resultadoPago = servicioPago.procesarPago(pedido, metodoPago);
  
      if (resultadoPago.exitoso) {
        pedido.estado = 'Pagado';
        pedido.fechaPago = new Date();
        console.log(`Pago realizado con éxito para el pedido ${pedido.idPedido}`);
      } else {
        throw new Error('El pago ha fallado');
      }
    }
  
    // Método para ver el historial de pedidos
    verHistorialPedidos() {
      if (this.pedidos.length === 0) {
        throw new Error('No tienes pedidos previos');
      }
  
      return this.pedidos.map(pedido => {
        return {
          idPedido: pedido.idPedido,
          fecha: pedido.fechaPedido,
          estado: pedido.estado,
          productos: pedido.productos,
        };
      });
    }
  
    // Método para realizar un nuevo pedido (agregar un pedido al historial)
    realizarPedido(pedido) {
      if (!pedido) {
        throw new Error('El pedido es inválido');
      }
      this.pedidos.push(pedido);
    }
    
  }
  
  module.exports = Comprador;
  