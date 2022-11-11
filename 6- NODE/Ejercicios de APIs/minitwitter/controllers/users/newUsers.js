const insertUserQuery = require('../../db/userQueries/insertUserQuery');

const { generateError } = require('../../helpers');

const newUser = async (req, res, next) => {
    try {
        // Obtenemos los campos del body.
        const { username, email, password } = req.body;

        // Si falta algun campo lanzamos un error
        if (!username || !email || !password) {
            // Si el usuario no nos hace llegar alguno de estos campos, lanzamos error
            throw generateError('Faltan campos', 400); // Creamos un error
        }

        // Intertamos un nuevo usuario en la base de datos

        await insertUserQuery(username, email, password);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        /* console.error(err); -> No es necesario porque los errores se mandan al middleware de error , donde ya tienen su propio console.*/
        next(err); // Lanza el error al middleware de error
    }
};

module.exports = newUser;
