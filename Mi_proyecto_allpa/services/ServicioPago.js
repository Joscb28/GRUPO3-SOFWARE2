class ServicioPago {
    constructor() {
      this.servicioExterno = null; 
    }
  
    // Método para procesar el pago
    procesarPago(pedido, metodoPago) {
      // Validar que los parámetros estén completos
      if (!pedido || !metodoPago) {
        throw new Error('Pedido o método de pago no especificados');
      }
  
      
      let pagoExitoso = false;
  
      // Evaluar el tipo de método de pago
      if (metodoPago === 'Tarjeta') {
        if (this.validarTarjeta(metodoPago)) {
          pagoExitoso = true;
        }
      } else if (metodoPago === 'Transferencia') {
        if (this.validarTransferencia()) {
          pagoExitoso = true;
        }
      } else {
        throw new Error('Método de pago no soportado');
      }
  
      // Retornar el resultado de la transacción
      return {
        exitoso: pagoExitoso,
        mensaje: pagoExitoso ? 'Pago aprobado' : 'Error en el pago',
      };
    }
  
    // Método para validar tarjeta
    validarTarjeta(metodoPago) {
      
      console.log(`Validando pago con ${metodoPago}`);
      return true; // Simulación de validación exitosa
    }
  
    // Método para validar transferencia
    validarTransferencia() {
      
      console.log("Validando pago por transferencia");
      return true; // Simulación de validación exitosa
    }
  }
  
  module.exports = ServicioPago;
  