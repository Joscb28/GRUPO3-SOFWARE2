const Comprador = require('../models/Comprador');
const ServicioPago = require('../services/ServicioPago');

// Mock para el servicio de pago
jest.mock('../services/ServicioPago', () => {
  return jest.fn().mockImplementation(() => {
    return {
      procesarPago: jest.fn(),
    };
  });
});

describe('Comprador - realizarPago', () => {
  let comprador;
  let pedido;

  beforeEach(() => {
    comprador = new Comprador(1, 'John', 'Doe', 'password', 'john.doe@example.com', '123456789', new Date(), 'USER123');
    pedido = {
      idPedido: 'PED123',
      estado: 'Pendiente',
      fechaPedido: new Date(),
      productos: ['Producto A', 'Producto B'],
    };
  });

  test('Pago exitoso actualiza estado del pedido y establece fecha de pago', () => {
    // Configurar mock para pago exitoso
    const mockServicioPago = new ServicioPago();
    mockServicioPago.procesarPago.mockReturnValue({ exitoso: true });

    comprador.realizarPago(pedido, 'Tarjeta');

    expect(pedido.estado).toBe('Pagado');
    expect(pedido.fechaPago).toBeInstanceOf(Date);
  });

  test('Pago falla si el estado del pedido no es "Pendiente"', () => {
    pedido.estado = 'Pagado'; // Pedido ya pagado

    expect(() => comprador.realizarPago(pedido, 'Tarjeta')).toThrow('El pedido no está pendiente para pago');
  });

  test('Lanza error si el servicio de pago falla', () => {
    // Configurar mock para pago fallido
    const mockServicioPago = new ServicioPago();
    mockServicioPago.procesarPago.mockReturnValue({ exitoso: false });

    expect(() => comprador.realizarPago(pedido, 'Tarjeta')).toThrow('El pago ha fallado');
  });

  test('Lanza error si el pedido no es válido (nulo o indefinido)', () => {
    expect(() => comprador.realizarPago(null, 'Tarjeta')).toThrow('El pedido no está pendiente para pago');
  });
});
