class ContratoRepository {
    constructor() {
      this.contratos = []; // Almacenamos los contratos en memoria para simular la base de datos
    }
  
    obtenerContrato(idContrato) {
      return this.contratos.find(contrato => contrato.idContrato === idContrato);
    }
  
    guardarContrato(contrato) {
      this.contratos.push(contrato);
    }
  }
  
  module.exports = ContratoRepository;
  