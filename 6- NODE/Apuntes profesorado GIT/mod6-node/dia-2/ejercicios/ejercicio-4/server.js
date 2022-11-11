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

const app = express();

// Middleware que deserializa el body y lo pone disponible en "req.body".
app.use(express.json());

app.post('/data', (req, res) => {
    const { body } = req;

    res.send(body);
});

app.use((req, res) => {
    res.status(404).send({
        message: 'No lo encuentro',
    });
});

app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
