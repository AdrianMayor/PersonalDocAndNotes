const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const selectUserByEmailQuery = require('../../db/userQueries/selectUserByEmailQuery');

const { generateError } = require('../../helpers');

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body; // Recogemos el email y la contraseña desde el body

        if (!email || !password) {
            // en caso de que no existan generamos
            throw generateError('Faltan campos', 400);
        }

        // Buscamos al usuario, mediante el email que nos indica en el login a traves del body, en la BBDD
        const user = await selectUserByEmailQuery(email);

        // Comprobar si las contraseñas coinciden
        const validPassword = await bcrypt.compare(password, user.password);

        // Si las contraseñas no coinciden lanzamos un error
        if (!validPassword) {
            throw generateError('Contraseña incorrecta', 401);
        }

        // Generamos (construimos) un objeto donde guardar la informacion que queremos agregar al token. En la doc de jwt se recomienda llamar esta variable "payload"
        const payload = {
            id: user.id,
            role: user.role,
        };

        // Firmamos (generamos) el 'token jwt.sign(info,secret)' -> El secreto del token debe ser informacion privada ya que es un sello de seguridad con el que se van a generar todos los tokens -> .env
        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '10d', // -> cuando caduca el token
        });

        res.send({
            status: 'ok',
            // Los datos que enviemos los encapsulamos en data
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUser;
