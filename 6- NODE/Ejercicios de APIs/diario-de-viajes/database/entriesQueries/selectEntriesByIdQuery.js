const getConnection = require('../getConnection');
const { generateError } = require('../../helpers');

const selecEntriesByIdQuery = async (idEntry) => {
    let connection;

    try {
        connection = await getConnection();

        const [entries] = await connection.query(
            `
            SELECT E.*, U.username
            FROM entries E
            INNER JOIN users U ON U.id = E.idUser
            WHERE E.id = ?
            `,
            [idEntry]
        );

        if (entries.length < 1) {
            throw generateError('No se ha encontrado ninguna entrada', 404);
        }

        return entries[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selecEntriesByIdQuery;
