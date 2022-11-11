const getConnection = require('../getConnection');
const { generateError } = require('../../helpers');

const selectAllEntriesQuery = async (keyword = '') => {
    let connection;

    try {
        connection = await getConnection();

        const [entries] = await connection.query(
            `
            SELECT E.*, U.username
            FROM entries E
            INNER JOIN users U ON U.id = E.idUser
            WHERE E.title LIKE ? || E.description LIKE ?
            ORDER BY E.createdAt DESC
            `,
            [`%${keyword}%`, `%${keyword}%`]
        );

        if (entries.length < 1) {
            throw generateError('No se ha encontrado ninguna entrada', 404);
        }

        return entries;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllEntriesQuery;
