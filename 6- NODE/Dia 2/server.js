const express = require('express');

// Creamos un servidor con express.
const app = express();

// Middleware que deserializa un body en formato "raw"
app.use(express.json());

// Obtener lista de usuarios
app.get('/users', (req, res) => {
    /* console.log(('IP:', req.ip)); // Desuso
    console.log('Path:', req.path); // Desuso porque es un metodo de HTTP y esta a su vez esta en desuso en favor del metodo 'express'*/

    res.send({
        status: 'Ok',
        data: 'Listado usuarios',
    });
});

// Obtener informacion de un usuario concreto mediante un "path param" (parametro de ruta, empieza por dos puntos)
app.get('/users/:idUser', (req, res) => {
    // Obtenemos el path param
    const { idUser } = req.params;

    res.send({
        status: 'ok',
        data: `Informacion del usuario ${idUser}`,
    });
});

// Obtener el listado de tweets.
app.get('/tweets', (req, res) => {
    // Obtenemos los query params
    const { keyword, author } = req.query;

    let data;

    if (keyword && author) {
        data = `Listado de tweets que contienen la palabra [${keyword} y cuyo autor es ${author}]`;
    } else if (keyword) {
        data = `Listado de tweets que contienen la palabra [${keyword}]`;
    } else if (author) {
        data = `Listado de tweets [cuyo autor es ${author}]`;
    }

    res.send({
        status: 'ok',
        data,
    });
});

// Crear un nuevo tweet
app.post('/tweets', (req, res) => {
    // Obtenemos la informacion del body
    const { text } = req.body;

    console.log(text);

    res.send({
        status: 'ok',
        message: 'Tweet creado',
    });
});

// Middleware de error.

app.use((req, res) => {
    //Especificamos el codigo de estado HTTP.
    res.status(404).send({
        status: 'Error',
        message: 'Not found!',
    });
});

// Ponemos al servidor en escucha de peticiones en el puerto 4000
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
