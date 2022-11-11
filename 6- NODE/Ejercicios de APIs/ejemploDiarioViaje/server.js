require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');

const { PORT, UPLOADS_DIR } = process.env;

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(fileUpload());

app.use(express.static(UPLOADS_DIR));

/**
 * #################
 * ## Middlewares ##
 * #################
 */

const authUser = require('./middlewares/authUser');

/**
 * ########################
 * ## Endpoints Usuarios ##
 * ########################
 */

const {
    newUser,
    loginUser,
    getOwnUser,
    editAvatarUser,
} = require('./controllers/users');

// Registro de usuario.
app.post('/users', newUser);

// Login de usuario.
app.post('/users/login', loginUser);

// Info del usuario del token.
app.get('/users', authUser, getOwnUser);

// Editar Avatar de usuario
app.put('/users', authUser, editAvatarUser);

/**
 * ########################
 * ## Endpoints Entradas ##
 * ########################
 */

const {
    newEntry,
    listEntries,
    getEntry,
    voteEntry,
    deleteEntry,
} = require('./controllers/entries');
const { application } = require('express');
const addPhotoToEntry = require('./controllers/entries/addPhotoToEntry');

// Nueva entrada.
app.post('/entries', authUser, newEntry);

// Listar entradas.
app.get('/entries', listEntries);

// Obtener una entrada concreta.
app.get('/entries/:idEntry', getEntry);

// Votar una entrada.
app.post('/entries/:idEntry/votes', authUser, voteEntry);

// Eliminar una entrada.
app.delete('/entries/:idEntry', authUser, deleteEntry);

// Añadir foto a una entrada
app.put('/entries/:idEntry', addPhotoToEntry);

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
        message: 'Not found!',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
