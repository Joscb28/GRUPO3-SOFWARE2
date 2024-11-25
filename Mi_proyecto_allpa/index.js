const Usuario = require('./Usuario');
const Comprador = require('./Comprador');
const Producto = require('./Producto');
const Pedido = require('./Pedido');
const ServicioPago = require('./ServicioPago');
const contratoRoutes = require('./routes/contratoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');


// Rutas
app.use('/contrato', contratoRoutes);
app.use('/pedido', pedidoRoutes);

// Creando un comprador
const comprador1 = new Comprador(1, 'Carlos', 'Gomez', 'password123', 'carlos@correo.com', '987654321', '2024-11-01', 2001);

// Creando productos
const producto1 = new Producto(1, 'Laptop', 'Electrónica', 10, 1000);

// Creando un pedido
const pedido1 = new Pedido(1, 'Calle Real 123', comprador1);
pedido1.añadirProducto(producto1, 2);

// Realizando un pago para el pedido
try {
  comprador1.realizarPago(pedido1, 'Tarjeta');
  console.log('El pago fue realizado con éxito.');
} catch (error) {
  console.error(error.message);
}
