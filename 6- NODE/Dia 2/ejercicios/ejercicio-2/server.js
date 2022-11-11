/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama a la ruta `/curso` con método GET, devuelve status `200` con el body:
 *
 *       {
 *          curso: 'backend'
 *       }
 *
 * - Cuando se llama a cualquier otra ruta con cualquier método devuelve status `200 OK`
 *   con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 */

const express = require('express');

// Creamos un servidor con express.
const app = express();

app.get('/curso', (req, res) => {
    res.send({
        curso: 'backend',
    });
});

app.use((req, res) => {
    res.send({
        message: 'Hello world',
    });
});

// Ponemos al servidor en escucha de peticiones en el puerto 4000
app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
