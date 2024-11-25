class ContratoService {
  constructor(contratoRepository) {
    this.contratoRepository = contratoRepository;
  }

  firmarContrato(idContrato, vendedor) {
    const contrato = this.contratoRepository.obtenerContrato(idContrato);

    if (!contrato) {
      throw new Error('Contrato no encontrado');
    }

    // Verificar que el vendedor sea el que esté relacionado con el contrato
    if (contrato.vendedor.id !== vendedor.id) {
      throw new Error('El vendedor no está autorizado a firmar este contrato');
    }

    return contrato.firmarContrato();
  }

  obtenerDetallesContrato(idContrato) {
    const contrato = this.contratoRepository.obtenerContrato(idContrato);
    if (!contrato) {
      throw new Error('Contrato no encontrado');
    }
    return contrato.obtenerDetallesContrato();
  }
}

module.exports = ContratoService;
