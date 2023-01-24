require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

// Importamos los controladores y los middlewares.
const isAuth = require('./middlewares/isAuth');
const updateAvatar = require('./controllers/users/updateAvatar');

const app = express();

app.use(cors());

app.use(express.static(process.env.UPLOADS_DIR));

// Deserializar body en formato form-data.
app.use(fileUpload());

// Actualizar avatar de usuario.
app.post('/avatar', isAuth, updateAvatar);

const startServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        path: '/graphql',
    });

    // Middleware de error.
    app.use((err, req, res, next) => {
        console.error(err);

        res.status(err.statusCode || 500).send({
            status: 'ok',
            message: err.message,
        });
    });

    // Middleware de not found.
    app.use((req, res, next) => {
        res.status(404).send({
            status: 'error',
            message: 'Not found!',
        });
    });

    app.listen(process.env.PORT, () => {
        console.log(
            `Server listening at port http://localhost:${process.env.PORT}`
        );
    });
};

startServer();
