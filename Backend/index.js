const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.post('/api/login', (req, res) => {
  // Lógica de autenticación y generación de token JWT
  // ...

  // Ejemplo de respuesta con un token de acceso
  const token = 'ejemplo-token';
  res.json({ token });
});

app.get('/api/data', (req, res) => {
  // Verificación del token de acceso y autorización
  // ...

  // Ejemplo de respuesta con datos para la tabla
  const data = [
    { id: 1, name: 'Registro 1', value: 10 },
    { id: 2, name: 'Registro 2', value: 20 },
    // ...
  ];
  res.json(data);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
