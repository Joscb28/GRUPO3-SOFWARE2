class Contrato {
  constructor(idContrato, pedido) {
    this.idContrato = idContrato;
    this.pedido = pedido; // Inicialmente asociado a un pedido
    this.estado = 'Pendiente'; // Estado inicial del contrato
    this.vendedor = null;
    this.comprador = null;
  }

  // Método para leer detalles del contrato
  obtenerDetallesContrato() {
    if (!this.productos || this.productos.length === 0) {
      throw new Error('El contrato no tiene productos asociados');
    }

    // Aquí se simula que el vendedor puede ver todos los detalles de los productos
    return {
      idContrato: this.idContrato,
      productos: this.productos,
      estado: this.estado,
    };
  }

  // Método que permite actualizar el estado del contrato
  actualizarEstadoContrato(nuevoEstado) {
    const estadosValidos = ['Pendiente', 'Aprobado', 'Rechazado'];
    if (!estadosValidos.includes(nuevoEstado)) {
      throw new Error('Estado de contrato inválido');
    }
    this.estado = nuevoEstado;
  }


  
  // Definir las bases del contrato con el pedido
  definirBases(pedido) {
    this.pedido = pedido;
    console.log('Bases del contrato definidas con el pedido:', pedido);
  }

  // Firmar contrato por parte del vendedor
  firmarContrato(usuario) {
    if (usuario instanceof Vendedor) {
      this.vendedor = usuario;
      this.estado = 'Firmado por Vendedor';
      console.log('Contrato firmado por el vendedor');
    } else {
      throw new Error('Solo un vendedor puede firmar el contrato');
    }
  }

  // Modificar el contrato antes de su publicación
  modificarContrato(nuevasBases) {
    // Validar las modificaciones
    if (!nuevasBases || typeof nuevasBases !== 'object') {
      throw new Error('Las nuevas bases deben ser un objeto');
    }

    // Complejidad ciclomática mínima de 4 (usamos varias condiciones y lógica de control)
    if (nuevasBases.pedido && nuevasBases.pedido !== this.pedido) {
      this.pedido = nuevasBases.pedido;
      console.log('Pedido actualizado en el contrato');
    } else if (nuevasBases.estado && nuevasBases.estado !== this.estado) {
      this.estado = nuevasBases.estado;
      console.log('Estado del contrato actualizado');
    } else if (nuevasBases.comprador && nuevasBases.comprador !== this.comprador) {
      this.comprador = nuevasBases.comprador;
      console.log('Comprador actualizado');
    } else {
      console.log('No se realizaron cambios en las bases del contrato');
    }
  }

  // Eliminar contrato
  eliminarContrato() {
    this.estado = 'Eliminado';
    console.log('Contrato eliminado');
  }
}

module.exports = Contrato;
