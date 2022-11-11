const express = require('express');

// 1-  Creamos un servidor con express
const app = express();

// 3- Middlewares

//          3.E:1 - Middleware que deserializa el JSON recibido por el body
app.use(express.json());

//      3.A - Obtener lista de usuarios
app.get('/users', (req, res) => {
    res.send({
        status: 'ok',
        data: 'Listado de usuarios',
    });
});

//      3.C - Obtener informacion de un usuario en concreto mediante > 'path.params' <
app.get('/users/:idUser', (req, res) => {
    // Obtenemos el path param
    const { idUser } = req.params;

    res.send({
        status: 'ok',
        data: `Informacion del usuario ${idUser}`,
    });
});

//      3.D - Obtener el listado de tweets mediante > 'query params' <
app.get('/tweets', (req, res) => {
    // Obtenemos los query params
    const { keyword, author } = req.query;

    let data;

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

//      3.E - Crear un nuevo tweet mediante > 'Request Body' <
app.post('/tweets', (req, res) => {
    // Obtenemos la informacion del body
    const { text } = req.body;

    console.log(text);

    res.send({
        status: 'ok',
        message: 'Tweet creado',
    });
});

//      3.B - Middleware de error.
app.use((req, res) => {
    //Especificamos el codigo de estado HTTP
    res.status(404).send({
        // Por defecto el codigo de error ( res.status() ) es 200
        status: 'error',
        message: 'Not found!',
    });
});

// 2- Ponemos el servidor a escuchar al servidor en el puerto 4000
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});

////    2.A -  Actualmente el server esta escuchando pero no va a responder a ninguna peticion dado que faltan los ENDPOINTS
