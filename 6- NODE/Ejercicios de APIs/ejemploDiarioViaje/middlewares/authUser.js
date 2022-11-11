const jwt = require('jsonwebtoken');

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

        req.user = payload;

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
