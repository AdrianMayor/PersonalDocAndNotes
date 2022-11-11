const getConnection = require('../getConnection');

const deleteEntryQuery = async (idEntry) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(`DELETE FROM entry_votes WHERE idEntry = ?`, [
            idEntry,
        ]);

        await connection.query(`DELETE FROM entry_photos WHERE idEntry = ?`, [
            idEntry,
        ]);

        await connection.query(`DELETE FROM entries WHERE id = ?`, [idEntry]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteEntryQuery;
