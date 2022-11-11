const getConnection = require('../getConnection');

const inserLikeQuery = async (idTweet, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        // Comprobamos si el usuario ha dado like
        const [likes] = await connection.query(
            `
                SELECT value FROM likes WHERE idUser = ? AND idTweet = ?
                `,
            [idUser, idTweet]
        );

        if (likes.length < 1) {
            await connection.query(
                `
                    INSERT INTO likes VALUES (idUser, idTweet, createdAt) VALUES (?,?,?)
                `,
                [idUser, idTweet, new Date()]
            );
        } else {
            await connection.query(
                `
                    UPDATE likes SET value = ?, modifiedAt = ? WHERE idUser = ? AND idTweet = ?
                `,
                [!likes[0].value, new Date(), idUser, idTweet]
            );

            return !likes[0].value;
        }
    } finally {
        if (connection) connection.release();
    }
};

module.exports = inserLikeQuery;
