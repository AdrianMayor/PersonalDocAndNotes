const selectUserByEmailQuery = require('../../db/userQueries/selectUserByEmailQuery');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { generateError } = require('../../helpers');

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw generateError('Faltan campos', 400);
        }

        const user = await selectUserByEmailQuery(email);

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw generateError('Contraseña incorrecta', 401);
        }

        // Si el usuario no está activo lanzamos un error.
        if (!user.active) {
            throw generateError('El usuario no está activado', 401);
        }

        const payload = {
            id: user.id,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '10d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUser;
