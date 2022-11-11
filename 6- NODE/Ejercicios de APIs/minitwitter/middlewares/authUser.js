const jwt = require('jsonwebtoken');

const { generateError } = require('../helpers');

const authUser = async (req, res, next) => {
    try {
        // El token va a venir de una propiedad llamada "authorization" que esta alojada en la cabecera. Accedemos a la cabecera mediante 'req.headers'
        const { authorization } = req.headers;

        // Si no hay token lanzamos un error
        if (!authorization) {
            throw generateError('Falta la cabecera de autorizacion', 401);
        }

        // Recuperamos las variables del 'payload' (la informacion que contiene el token) que construimos en 'loginUser'
        let payload;

        try {
            // Este try lo ponemos porque si falla el jwt lanza un mensaje de errror en ingles.
            // Intentamos obtener la info del token deconstruyendolo 'jwt.verify(token,secret)'
            payload = jwt.verify(authorization, process.env.SECRET);
        } catch {
            throw generateError('Token incorrecto', 401);
        }

        // Agregamos una nueva propiedad al objeto "request" donde alojar info del payload y tener esta info disponible como variable de entorno
        req.user = payload;

        // Saltamos al siguiente controlador (En el server.js (app.get('/users', authUser, getOwnUser);))
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
