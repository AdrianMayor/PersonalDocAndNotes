const jwt = require('jsonwebtoken');

const selectUserByIdQuery = require('../db/userQueries/selectUserByIdQuery');

const { generateError } = require('../helpers');

const authUser = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw generateError('Falta la cabecera de autorización', 401);
        }

        let payload;

        try {
            payload = jwt.verify(authorization, process.env.SECRET);
        } catch {
            throw generateError('Token incorrecto', 401);
        }

        // Comprobamos que el usuario este activado.
        const user = selectUserByIdQuery(payload.id);

        if (!user.active) {
            throw generateError('El usuario no está activado', 401);
        }

        req.user = payload;

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
