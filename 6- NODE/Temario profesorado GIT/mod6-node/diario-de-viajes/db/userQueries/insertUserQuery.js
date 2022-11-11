const getConnection = require('../getConnection');

const bcrypt = require('bcrypt');

const { generateError } = require('../../helpers');

const insertUserQuery = async (username, email, password, registrationCode) => {
    let connection;

    try {
        connection = await getConnection();

        const [users] = await connection.query(
            `SELECT id FROM users WHERE username = ? OR email = ?`,
            [username, email]
        );

        if (users.length > 0) {
            throw generateError(
                'Ya existe un usuario con ese nombre o ese email en la base de datos',
                403
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await connection.query(
            `INSERT INTO users (username, email, password, registrationCode, createdAt) VALUES (?, ?, ?, ?, ?)`,
            [username, email, hashedPassword, registrationCode, new Date()]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertUserQuery;
