const getConnection = require('../getConnection');

const insertEntryQuery = async (title, place, description, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        const [newEntry] = await connection.query(
            `INSERT INTO entries (title, place, description, idUser, createdAt) VALUES (?, ?, ?, ?, ?)`,
            [title, place, description, idUser, new Date()]
        );

        return newEntry.insertId;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertEntryQuery;
