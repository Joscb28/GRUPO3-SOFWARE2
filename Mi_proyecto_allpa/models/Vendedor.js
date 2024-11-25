const Usuario = require('./Usuario');

class Vendedor extends Usuario {
    constructor(idUsuario, nombre, apellidoPaterno, contraseña, email, telContacto, sellerID) {
      super(idUsuario, nombre, apellidoPaterno, contraseña, email, telContacto);
      this.sellerID = sellerID;
    }
  
// Método para ver la información del comprador desde el pedido
verInformacionComprador(pedido) {
    try {
      const infoComprador = pedido.verInformacionComprador();
      console.log('Información del comprador:', infoComprador);
      return infoComprador;
    } catch (error) {
      console.error('Error al obtener información del comprador:', error.message);
      return null;
    }
  }



  modificarInfo(nuevaInfo) {
    // Lógica para modificar la información del vendedor
    this.nombre = nuevaInfo.nombre || this.nombre;
    this.apellidoPaterno = nuevaInfo.apellidoPaterno || this.apellidoPaterno;
    this.email = nuevaInfo.email || this.email;
    this.telContacto = nuevaInfo.telContacto || this.telContacto;
  }

  disponerProducto(producto) {
    // Lógica para que el vendedor registre un producto en la plataforma
    console.log(`Producto ${producto.nombre} dispuesto para la venta`);
  }

  verPedidos() {
    // Lógica para que el vendedor vea los pedidos hechos por los compradores
    console.log('Mostrando pedidos');
  }

  firmarContrato(contrato) {
    // Permite que un vendedor firme un contrato y lo añada a su lista de contratos
    if (!this.contratos.some(c => c.idContrato === contrato.idContrato)) {
      this.contratos.push(contrato);
      contrato.firmarContrato(this);
    } else {
      throw new Error('El contrato ya ha sido firmado por este vendedor');
    }
  }

  listarContratos() {
    // Método para listar todos los contratos activos del vendedor
    return this.contratos;
  }

  // Método para salir de un contrato si no puede satisfacer la demanda
  salirDeContrato(contrato) {
    const index = this.contratos.findIndex(c => c.idContrato === contrato.idContrato);
    if (index > -1) {
      this.contratos.splice(index, 1);
      contrato.estado = 'Cancelado por Vendedor';
      console.log(`Vendedor ha salido del contrato ${contrato.idContrato}`);
    } else {
      throw new Error('Contrato no encontrado');
    }
  }
}

module.exports = Vendedor;
