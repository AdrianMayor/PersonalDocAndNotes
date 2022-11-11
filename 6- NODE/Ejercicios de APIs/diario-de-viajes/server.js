require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');

const { MYSQL_HOST, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(fileUpload());
/*
 *   #####################
 *   ## Middlewares ##
 *   #####################
 */
const authUser = require('./middlewares/authUser');

/*
 *   #####################
 *   ## Users Endpoints ##
 *   #####################
 */
const loginUser = require('./controllers/users/loginUser');
const newUser = require('./controllers/users/newUsers');
const getUser = require('./controllers/users/getUser');

app.post('/users', newUser);
app.post('/users/login', loginUser);
app.get('/users', authUser, getUser);

/*
 *   #######################
 *   ## Entries Endpoints ##
 *   #######################
 */
const newEntries = require('./controllers/entries/newEntries');
const getListEntries = require('./controllers/entries/getListEntries');
const getEntry = require('./controllers/entries/getEntry');

app.post('/entries', authUser, newEntries);
app.get('/entries', getListEntries);
app.get('/entries/:idEntry', getEntry);

/*
 *   ######################
 *   ## Middleware Error ##
 *   ######################
 */
app.use((err, req, res, next) => {
    console.error(err);

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

app.listen(PORT, () => {
    console.log(`Server listening at htttp://${MYSQL_HOST}:${PORT}`);
});
