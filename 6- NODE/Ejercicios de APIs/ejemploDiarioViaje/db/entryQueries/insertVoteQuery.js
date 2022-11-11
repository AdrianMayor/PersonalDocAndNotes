const getConnection = require('../getConnection');

const { generateError } = require('../../helpers');

const insertVoteQuery = async (value, idUser, idEntry) => {
    let connection;

    try {
        connection = await getConnection();

        const [votes] = await connection.query(
            `SELECT id FROM entry_votes WHERE idUser = ? AND idEntry = ?`,
            [idUser, idEntry]
        );

        if (votes.length > 0) {
            throw generateError('Ya has votado esta entrada', 403);
        }

        const validVotes = [1, 2, 3, 4, 5];

        if (!validVotes.includes(value)) {
            throw generateError(
                'El voto debe ser un valor entero entre 1 y 5',
                403
            );
        }

        await connection.query(
            `INSERT INTO entry_votes (value, idUser, idEntry, createdAt) VALUES (?, ?, ?, ?)`,
            [value, idUser, idEntry, new Date()]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertVoteQuery;
