const express = require('express');

// Creamos un servidor con express.
const app = express();

// Listado de tweets.
app.get('/tweets', (req, res) => {
    // Enviamos una respuesta al cliente.
    res.send('Lista de tweets');
});

// Información detallada de un tweet.
app.get('/tweets/:idTweet', (req, res) => {
    // Obtenemos el id del tweet.
    const { idTweet } = req.params;

    // Enviamos una respuesta al cliente.
    res.send(`Información del tweet ${idTweet}`);
});

// Login de usuario.
app.post('/login', (req, res) => {
    // Enviamos una respuesta al cliente.
    res.send('Usuario logueado');
});

// Middleware de error. Se ejecuta cuando se envíe al servidor un endpoint
// no contemplado.
app.use((req, res) => {
    // Enviamos una respuesta al cliente.
    res.send('Not found! :(');
});

// Ponemos el servidor a escuchar peticiones en el puerto 4000.
// El primer argumento hace referencia al puerto y el segundo argumento
// (opcional) es un callback.
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});
