class Pedido {
  constructor(idPedido, direccionComprador, comprador, estado = 'Pendiente') {
    this.idPedido = idPedido;
    this.direccionComprador = direccionComprador;
    this.comprador = comprador; // El comprador es el que realiza el pedido
    this.estado = estado;
    this.productos = [];
    this.fechaPedido = new Date();
  }

  obtenerDetallesPedido() {
    if (this.estado !== 'Finalizado') {
      throw new Error('El pedido aún no ha sido finalizado');
    }

    return {
      idPedido: this.idPedido,
      productos: this.productos,
      cantidadTotal: this.cantidadTotal,
      estado: this.estado,
      fecha: this.fecha,
      comprador: this.comprador.nombre
    };
  }

  // Método para cambiar el estado del pedido
  cambiarEstadoPedido(nuevoEstado) {
    const estadosValidos = ['Pendiente', 'Confirmado', 'Finalizado', 'Cancelado'];
    if (!estadosValidos.includes(nuevoEstado)) {
      throw new Error('Estado de pedido inválido');
    }
    this.estado = nuevoEstado;
  }



  // Método para ver los detalles del comprador
  verInformacionComprador() {
    if (!this.comprador) {
      throw new Error('No se ha asociado un comprador a este pedido');
    }

    return {
      nombre: this.comprador.nombre,
      apellido: this.comprador.apellidoPaterno,
      email: this.comprador.email,
      telefono: this.comprador.telContacto,
      direccion: this.direccionComprador,
    };
  }

  // Método para añadir un producto al pedido
  añadirProducto(producto, cantidad) {
    if (!producto || cantidad <= 0) {
      throw new Error('El producto y la cantidad deben ser válidos');
    }

    const productoExistente = this.productos.find(p => p.productoID === producto.productoID);
    
    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      this.productos.push({ productoID: producto.productoID, nombre: producto.nombre, cantidad });
    }
  }

  // Método para eliminar un producto del pedido
  eliminarProducto(productoID) {
    const index = this.productos.findIndex(p => p.productoID === productoID);
    if (index !== -1) {
      this.productos.splice(index, 1);
      console.log(`Producto con ID ${productoID} eliminado del pedido`);
    } else {
      console.log('Producto no encontrado en el pedido');
    }
  }

  // Método para ver los productos del pedido
  verProductos() {
    if (this.productos.length === 0) {
      console.log('No hay productos en este pedido');
    } else {
      console.log('Productos en el pedido:', this.productos);
    }
  }

  // Método para calcular el total del pedido (si cada producto tiene un precio)
  calcularTotal() {
    if (this.productos.length === 0) {
      throw new Error('El pedido no contiene productos');
    }

    let total = 0;
    this.productos.forEach(producto => {
      total += producto.cantidad * producto.precio; // Asumiendo que el producto tiene un precio
    });

    console.log('Total del pedido:', total);
    return total;
  }
}

module.exports = Pedido;
