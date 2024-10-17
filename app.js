const express = require('express');
const app = express();
const path = require('path');
const usuarioRoutes = require('./routes/usuario'); // Asegúrate de que esté bien enlazado

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos (como CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Usar las rutas del controlador de usuario
app.use(usuarioRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
