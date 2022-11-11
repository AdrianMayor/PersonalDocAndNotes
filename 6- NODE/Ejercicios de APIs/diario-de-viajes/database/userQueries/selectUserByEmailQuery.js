const { generateError } = require('../../helpers');
const getConnection = require('../getConnection');

const selectUserByEmailQuery = async (email) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            `
                SELECT id, password, role FROM users WHERE email = ?
            `,
            [email]
        );

        if (user.length < 1) throw generateError('Email incorrecto', 404);

        return user[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByEmailQuery;
