/* 
    Instalamos el framework express ya que 'http' esta en desuso
    'npm i express'
*/

const express = require('express');

// Creamos un servidor con express
const app = express();

// Hacemos que todas las peticiones entren en el servidor pasen por este middleware. '.use()' . // Middleware es por donde hacemos pasar nuestra peticion
/* app.use((request, response) => {
    // Enviamos una respuesta al cliente
    response.send('Hello from express');
}); */

// Listado de tweets
app.get('/tweets', (request, response) => {
    response.send('Lista de tweets');
});

// Informacion detallada de un tweet. -> 'idTweet' es un parametro de busqueda
app.get('/tweets/:idTweet', (request, response) => {
    // Obtenemos el id de tweet
    const { idTweet } = request.params;

    //Enviamos una respuesta al cliente
    response.send(`Informacion del tweet ${idTweet}`);
});

// Login de usuario
app.post('/login', (req, res) => {
    res.send('Usuario logeado');
});

//
app.use((req, res) => {
    res.send('Not Found');
});

// Ponemos al servidor a escuchar peticiones en el puerto 4000.
// El primer argumento hace rferencia al puerto y el segundo argumento (opcional) es un callback
app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
});
