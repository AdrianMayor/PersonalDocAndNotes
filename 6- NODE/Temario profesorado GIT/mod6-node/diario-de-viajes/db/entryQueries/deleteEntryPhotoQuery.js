const getConnection = require('../getConnection');

const deleteEntryPhotoQuery = async (idPhoto) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(`DELETE FROM entry_photos WHERE id = ?`, [
            idPhoto,
        ]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteEntryPhotoQuery;
