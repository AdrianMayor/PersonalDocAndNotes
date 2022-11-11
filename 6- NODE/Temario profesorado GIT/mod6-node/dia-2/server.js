const express = require('express');

// Creamos un servidor con express.
const app = express();

// Middleware que deserializa un body en formato "raw".
app.use(express.json());

// Obtener lista de usuarios.
app.get('/users', (req, res) => {
    res.send({
        status: 'ok',
        data: 'Listado de usuarios',
    });
});

// Obtener información de un usuario concreto mediante un "path param".
app.get('/users/:idUser', (req, res) => {
    // Obtenemos el path param.
    const { idUser } = req.params;

    res.send({
        status: 'ok',
        data: `Información del usuario ${idUser}`,
    });
});

// Obtener el listado de tweets.
app.get('/tweets', (req, res) => {
    // Obtenemos los query params.
    const { keyword, author } = req.query;

    let data = 'Listado de tweets';

    if (keyword && author) {
        data = `Listado de tweets que contienen la palabra [${keyword}] y cuyo autor es [${author}]`;
    } else if (keyword) {
        data = `Listado de tweets que contienen la palabra [${keyword}]`;
    } else if (author) {
        data = `Listado de tweets cuyo autor es [${author}]`;
    }

    res.send({
        status: 'ok',
        data,
    });
});

// Crear un nuevo tweet.
app.post('/tweets', (req, res) => {
    // Obtenemos la información del body.
    const { text } = req.body;

    console.log(text);

    res.send({
        status: 'ok',
        message: 'Tweet creado',
    });
});

// Middleware de error.
app.use((req, res) => {
    // Especificamos el código de estado HTTP.
    res.status(404).send({
        status: 'error',
        message: 'Not found!',
    });
});

// Ponemos al servidor a escuchar peticiones en el puerto 4000.
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
