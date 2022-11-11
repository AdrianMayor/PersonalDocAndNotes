const { v4: uuid } = require('uuid');

const insertUserQuery = require('../../db/userQueries/insertUserQuery');

const { verifyEmail, generateError } = require('../../helpers');

const newUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            throw generateError('Faltan campos', 400);
        }

        // Generamos un código de registro.
        const registrationCode = uuid();

        // Enviamos un mail de verificación al usuario.
        await verifyEmail(email, registrationCode);

        await insertUserQuery(username, email, password, registrationCode);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
