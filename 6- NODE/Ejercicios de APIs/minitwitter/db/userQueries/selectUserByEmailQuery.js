const getConnection = require('../getConnection');

const { generateError } = require('../../helpers');

const selectUserByEmailQuery = async (email) => {
    let connection;

    try {
        connection = await getConnection();

        const [users] = await connection.query(
            'SELECT id, password, role FROM users WHERE email = ?',
            [email]
        );

        if (users.length < 1) {
            throw generateError('Email incorrecto', 404);
        }

        // Dado que no deberia existir mas de un usuario con el mismo email, el numero maximo de uusarios que vendra en el array de usuarios es 1. De ser así, retornamos el usuario que haya en la posicion 0 del array "users"
        return users[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByEmailQuery;
