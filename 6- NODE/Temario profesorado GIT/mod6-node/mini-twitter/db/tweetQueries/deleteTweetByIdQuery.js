const getConnection = require('../getConnection');

const deleteTweetByIdQuery = async (idTweet) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(`DELETE FROM tweets WHERE id = ?`, [idTweet]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteTweetByIdQuery;
