require('dotenv').config(); // Metodo config pone disponibles las variables del archivo .env como variables de entorno.

const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

// Cargamos el puerto correspondiente desde el process.env -> metodo dotenv
const { PORT, UPLOADS_DIR } = process.env;

// Creamos un servidor con express
const app = express();

// Activamos el middleware con las cors para evitar cvonflictos con las cors al intentar conetar el frontend con el backend
app.use(cors());

// Middleware que hqace uso del logger "morgan"
app.use(morgan('dev'));

// Middleware que deserializa el body en formato 'raw' y lo pone disponible en "req.body"
app.use(express.json());

// Middleware que desserializa el body en formato "form-data"
app.use(fileUpload());

// Indicamos cual es el directorio de los ficheros estaticos
app.use(express.static(UPLOADS_DIR));

/*
 *   #################
 *   ## Middlewares ##
 *   #################
 */
const authUser = require('./middlewares/authUser');
const authUserOptional = require('./middlewares/authUserOptional');

/*
 *   ########################
 *   ## Endpoints Usuarios ##
 *   ########################
 */
// -> Importamos funciones controladora
const {
    newUser,
    loginUser,
    getOwnUser,
    editUser,
} = require('./controllers/users');

// Registro de un nuevo usuario 4.| A. -> Modularizado
app.post('/users', newUser);

// Login de usuario
app.post('/users/login', loginUser);

// Info del usuario logueado
app.get('/users', authUser, getOwnUser);

// Editar un usuario
app.put('/users', authUser, editUser);

/*
 *   ######################
 *   ## Endpoints Tweets ##
 *   ######################
 */
const {
    newTweet,
    listTweets,
    getTweet,
    likeTweet,
    deleteTweet,
} = require('./controllers/tweets');

// Crear un nuevo tweet.
app.post('/tweets', authUser, newTweet);

// Listar tweets.
app.get('/tweets', authUserOptional, listTweets);

// Info tweet concreto.
app.get('/tweets/:idTweet', authUserOptional, getTweet);

// Dar like a un tweet.
app.post('/tweets/:idTweet/likes', authUser, likeTweet);

// Eliminar un tweet.
app.delete('/tweets/:idTweet', authUser, deleteTweet);

/*
 *   ######################
 *   ## Middleware Error ##
 *   ######################
 */
app.use((err, req, res, next) => {
    console.error(err);

    // err.statusCode para los errores generados por el programador
    // Los errores generados por el servidor no tendran la propiedad 'statusCode', ya que nos la inventamos nosotros en la linea 28 y dara undefined. Por defecto los errores de servidor tienen el codigo 500.
    res.status(err.statusCode || 500).send({
        status: 'error',
        message: err.message,
    });
});

/*
 *   ##########################
 *   ## Middleware Not Found ##
 *   ##########################
 */
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found!',
    });
});

// Ponemos al servidor a escuchar en el puerto configurado.
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
