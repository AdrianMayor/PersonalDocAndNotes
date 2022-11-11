require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const { PORT, UPLOADS_DIR } = process.env;

const app = express();

// Activamos el middleware con las cors para evitar conflictos con las cors al intentar conectar el frontend
// con el backend.
app.use(cors());

// Middleware que hace uso del logger "morgan".
app.use(morgan('dev'));

// Middleware que deserializa un body con formato "raw" y lo pone disponible en "req.body".
app.use(express.json());

// Middleware que deserializa un body con formato "form-data".
app.use(fileUpload());

// Indicamos cual es el directorio de los ficheros estáticos.
app.use(express.static(UPLOADS_DIR));

/**
 * #################
 * ## Middlewares ##
 * #################
 */

const authUser = require('./middlewares/authUser');
const authUserOptional = require('./middlewares/authUserOptional');

/**
 * ########################
 * ## Endpoints Usuarios ##
 * ########################
 */

const {
    newUser,
    loginUser,
    getOwnUser,
    editUser,
} = require('./controllers/users');

// Registro de un nuevo usuario.
app.post('/users', newUser);

// Login de usuario.
app.post('/users/login', loginUser);

// Info de un usuario logueado.
app.get('/users', authUser, getOwnUser);

// Editar un usuario.
app.put('/users', authUser, editUser);

/**
 * ######################
 * ## Endpoints Tweets ##
 * ######################
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

// Info de un tweet concreto.
app.get('/tweets/:idTweet', authUserOptional, getTweet);

// Dar like a un tweet.
app.post('/tweets/:idTweet/likes', authUser, likeTweet);

// Eliminar un tweet.
app.delete('/tweets/:idTweet', authUser, deleteTweet);

/**
 * ######################
 * ## Middleware Error ##
 * ######################
 */

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).send({
        status: 'error',
        message: err.message,
    });
});

/**
 * ##########################
 * ## Middleware Not Found ##
 * ##########################
 */

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'No encontrado',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:4000`);
});
