// Importa Express
const express = require('express');

// Crea una instancia de la aplicación
const app = express();

// Configura un puerto
const PORT = process.env.PORT || 3000;

// Define una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Node.js!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
