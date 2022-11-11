const insertUserQuery = require('../../db/userQueries/insertUserQuery');

const { generateError } = require('../../helpers');

const newUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            throw generateError('Faltan campos', 400);
        }

        await insertUserQuery(username, email, password);

        res.send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
