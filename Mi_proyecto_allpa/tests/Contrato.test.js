const Contrato = require('../models/Contrato');
const Pedido = require('../models/Pedido'); // Si la clase Pedido se encuentra en models

describe('Pruebas unitarias del método modificarContrato de Contrato', () => {
  let contrato;
  let pedido1;
  let pedido2;

  beforeEach(() => {
    // Inicializar objetos para cada prueba
    pedido1 = { idPedido: 'P001', productos: ['Producto1', 'Producto2'] };
    pedido2 = { idPedido: 'P002', productos: ['Producto3'] };
    contrato = new Contrato('C001', pedido1);
  });

  test('Debería actualizar el pedido si es diferente', () => {
    const nuevasBases = { pedido: pedido2 };

    contrato.modificarContrato(nuevasBases);

    expect(contrato.pedido).toBe(pedido2);
  });

  test('Debería actualizar el estado si es diferente', () => {
    const nuevasBases = { estado: 'Aprobado' };

    contrato.modificarContrato(nuevasBases);

    expect(contrato.estado).toBe('Aprobado');
  });

  test('Debería actualizar el comprador si es diferente', () => {
    const compradorMock = { idUsuario: 'U001', nombre: 'Comprador1' };
    const nuevasBases = { comprador: compradorMock };

    contrato.modificarContrato(nuevasBases);

    expect(contrato.comprador).toBe(compradorMock);
  });

  test('No debería realizar cambios si las nuevas bases no difieren', () => {
    const nuevasBases = { pedido: pedido1, estado: 'Pendiente' };

    const consoleSpy = jest.spyOn(console, 'log');

    contrato.modificarContrato(nuevasBases);

    expect(contrato.pedido).toBe(pedido1);
    expect(contrato.estado).toBe('Pendiente');
    expect(consoleSpy).toHaveBeenCalledWith('No se realizaron cambios en las bases del contrato');
  });
});
