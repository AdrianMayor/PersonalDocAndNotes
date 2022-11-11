const getConnection = require('../getConnection');

const insertLikeQuery = async (idTweet, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        const [likes] = await connection.query(
            `SELECT value FROM likes WHERE idUser = ? AND idTweet = ?`,
            [idUser, idTweet]
        );

        if (likes.length < 1) {
            await connection.query(
                `INSERT INTO likes (idUser, idTweet, createdAt) VALUES (?, ?, ?)`,
                [idUser, idTweet, new Date()]
            );

            return true;
        } else {
            await connection.query(
                `UPDATE likes SET value = ?, modifiedAt = ? WHERE idUser = ? AND idTweet = ?`,
                [!likes[0].value, new Date(), idUser, idTweet]
            );

            return !likes[0].value;
        }
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertLikeQuery;
