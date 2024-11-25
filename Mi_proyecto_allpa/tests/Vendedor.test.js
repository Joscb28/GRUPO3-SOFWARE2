const Vendedor = require('../Vendedor');
const Contrato = require('../Contrato');

describe('Pruebas para el método salirDeContrato de Vendedor', () => {
  let vendedor, contrato1, contrato2;

  beforeEach(() => {
    vendedor = new Vendedor(1, 'Juan', 'Pérez', 'password', 'juan.perez@example.com', '123456789', 'V123');
    contrato1 = new Contrato(101, { idPedido: 1 });
    contrato2 = new Contrato(102, { idPedido: 2 });
    vendedor.contratos = [contrato1, contrato2]; // Asignamos contratos iniciales al vendedor
  });

  test('Debería eliminar correctamente el contrato de la lista', () => {
    vendedor.salirDeContrato(contrato1);
    expect(vendedor.contratos).toHaveLength(1); // Solo debería quedar un contrato
    expect(vendedor.contratos).not.toContain(contrato1);
  });

  test('Debería cambiar el estado del contrato a "Cancelado por Vendedor"', () => {
    vendedor.salirDeContrato(contrato2);
    expect(contrato2.estado).toBe('Cancelado por Vendedor');
  });

  test('Debería lanzar un error si el contrato no se encuentra en la lista', () => {
    const contratoInexistente = new Contrato(999, { idPedido: 3 });
    expect(() => vendedor.salirDeContrato(contratoInexistente)).toThrow('Contrato no encontrado');
  });

  test('Debería lanzar un error si la lista de contratos está vacía', () => {
    vendedor.contratos = []; // Vaciamos la lista de contratos
    expect(() => vendedor.salirDeContrato(contrato1)).toThrow('Contrato no encontrado');
  });
});
