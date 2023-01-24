const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');

const isAuth = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw generateError('Falta la cabecera de autenticación', 401);
        }

        let payload;

        try {
            payload = jwt.verify(authorization, process.env.SECRET);
        } catch {
            throw generateError('Token incorrecto', 401);
        }

        // Agregamos una nueva propiedad al objeto request.
        req.user = payload;

        // Saltamos al siguiente controlador.
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = isAuth;
