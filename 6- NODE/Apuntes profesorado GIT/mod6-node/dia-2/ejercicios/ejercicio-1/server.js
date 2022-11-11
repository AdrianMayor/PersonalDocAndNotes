/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor web que escucha cualquier request en el puerto 4000, y devuelve siempre status
 * `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 */

const express = require('express');

const app = express();

app.use((req, res) => {
    res.send({
        curso: 'backend',
    });
});

app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});
