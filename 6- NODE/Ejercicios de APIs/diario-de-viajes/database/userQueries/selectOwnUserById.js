const { generateError } = require('../../helpers');
const getConnection = require('../getConnection');

const selectOwnUserById = async (idUser) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            `
                SELECT id, username, email, avatar, role, createdAt, modifiedAt FROM users WHERE id  = ?
            `,
            [idUser]
        );

        if (user.length < 1) throw generateError('No existe usuario', 404);

        return user[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectOwnUserById;
