/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Servidor web que escucha cualquier request.
 *
 * - Cuando la request es un `POST` a `/data`, se devuelve el *JSON* recibido.
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método, devuelve status
 *   `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */

const express = require('express');

// Creamos un servidor con express.
const app = express();

// Middleware que deserializa un body en formato "raw"
app.use(express.json());

app.post('/data', (req, res) => {
    // Obtenemos la informacion del body
    const { body } = req.body;

    console.log({ body });

    res.send({ body });
});

app.use((req, res) => {
    res.status(404).send({
        status: 'Error',
        message: 'Not found!',
    });
});

app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
