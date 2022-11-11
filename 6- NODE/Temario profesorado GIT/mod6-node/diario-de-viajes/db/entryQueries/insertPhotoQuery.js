const getConnection = require('../getConnection');

const insertPhotoQuery = async (photoName, idEntry) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(
            `INSERT INTO entry_photos (name, idEntry, createdAt) VALUES (?, ?, ?)`,
            [photoName, idEntry, new Date()]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertPhotoQuery;
