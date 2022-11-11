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
    validateUser,
    getOwnUser,
    editUserAvatar,
} = require('./controllers/users');

// Registro de usuario.
app.post('/users', newUser);

// Validar un usuario.
app.put('/users/validate/:registrationCode', validateUser);

// Login de usuario.
app.post('/users/login', loginUser);

// Info del usuario del token.
app.get('/users', authUser, getOwnUser);

// Editar el avatar de un usuario.
app.put('/users', authUser, editUserAvatar);

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
    addEntryPhoto,
    deleteEntryPhoto,
    deleteEntry,
} = require('./controllers/entries');

// Nueva entrada.
app.post('/entries', authUser, newEntry);

// Listar entradas.
app.get('/entries', listEntries);

// Obtener una entrada concreta.
app.get('/entries/:idEntry', getEntry);

// Votar una entrada.
app.post('/entries/:idEntry/votes', authUser, voteEntry);

// Agregar una foto a una entrada.
app.post('/entries/:idEntry/photos', authUser, addEntryPhoto);

// Eliminar una foto de una entrada.
app.delete('/entries/:idEntry/photos/:idPhoto', authUser, deleteEntryPhoto);

// Eliminar una entrada.
app.delete('/entries/:idEntry', authUser, deleteEntry);

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
