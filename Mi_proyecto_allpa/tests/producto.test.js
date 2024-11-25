const Producto = require('../models/Producto');

describe('Producto', () => {
  let producto;

  beforeEach(() => {
    producto = new Producto(1, 'Manzana', 'Fruta', 100);
  });

  test('Debe modificar el nombre del producto correctamente', () => {
    const nuevaInfo = { nombre: 'Pera' };
    producto.modificarInfoProducto(nuevaInfo);
    expect(producto.nombre).toBe('Pera');
  });

  test('Debe modificar el tipo del producto correctamente', () => {
    const nuevaInfo = { tipoDeProducto: 'Vegetal' };
    producto.modificarInfoProducto(nuevaInfo);
    expect(producto.tipoDeProducto).toBe('Vegetal');
  });

  test('Debe modificar la cantidad disponible del producto correctamente', () => {
    const nuevaInfo = { cantidadDisponible: 50 };
    producto.modificarInfoProducto(nuevaInfo);
    expect(producto.cantidadDisponible).toBe(50);
  });

  test('Debe mantener los valores originales si no se proporcionan nuevos datos', () => {
    const nuevaInfo = {};
    producto.modificarInfoProducto(nuevaInfo);
    expect(producto.nombre).toBe('Manzana');
    expect(producto.tipoDeProducto).toBe('Fruta');
    expect(producto.cantidadDisponible).toBe(100);
  });
});
