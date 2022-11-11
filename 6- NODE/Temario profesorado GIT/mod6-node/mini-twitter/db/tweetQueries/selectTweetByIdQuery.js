const getConnection = require('../getConnection');

const { generateError } = require('../../helpers');

const selectTweetByIdQuery = async (idTweet, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        const [tweets] = await connection.query(
            `
                SELECT T.id, 
                    T.idUser, 
                    U.username, 
                    T.text, 
                    T.image, 
                    SUM(IFNULL(L.value = true, 0)) AS likes, 
                    T.idUser = ? AS owner, 
                    BIT_OR(L.idUser = ? AND L.value = 1) AS likedByMe, 
                    T.createdAt 
                FROM tweets T
                LEFT JOIN likes L ON T.id = L.idTweet
                LEFT JOIN users U ON T.idUser = U.id
                WHERE T.id = ?
                GROUP BY T.id
                ORDER BY T.createdAt DESC
            `,
            [idUser, idUser, idTweet]
        );

        if (tweets.length < 1) {
            throw generateError('No se ha encontrado ningún tweet', 404);
        }

        return tweets[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectTweetByIdQuery;
