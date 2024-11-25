class Producto {
    constructor(idProducto, nombre, tipoDeProducto, cantidadDisponible) {
      this.idProducto = idProducto;
      this.nombre = nombre;
      this.tipoDeProducto = tipoDeProducto;
      this.cantidadDisponible = cantidadDisponible;
    }
 
  // Método que devuelve los detalles del producto
  obtenerDetallesProducto() {
    return {
      ProductoID: this.ProductoID,
      nombre: this.nombre,
      tipoDeProducto: this.tipoDeProducto,
      cantidadDisponible: this.cantidadDisponible,
    };
  }    
    

    registrarProducto() {
      console.log(`Producto ${this.nombre} registrado correctamente`);
    }
  
    modificarInfoProducto(nuevaInfo) {
      this.nombre = nuevaInfo.nombre || this.nombre;
      this.tipoDeProducto = nuevaInfo.tipoDeProducto || this.tipoDeProducto;
      this.cantidadDisponible = nuevaInfo.cantidadDisponible || this.cantidadDisponible;
      console.log('Producto modificado:', this);
    }
  }
  
  module.exports = Producto;
  