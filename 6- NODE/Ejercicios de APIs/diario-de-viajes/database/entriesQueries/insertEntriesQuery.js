const getConnection = require('../getConnection');

const insertEntrieQuery = async (idUser, title, description, imgName) => {
    let connection;
    try {
        connection = await getConnection();

        await connection.query(
            `
                INSERT INTO entries (idUser, title, description, image, createdAt)
                VALUES (?, ?, ?, ?, ?)
            `,
            [idUser, title, description, imgName, new Date()]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertEntrieQuery;
