const generateError = require('../../helpers');
const getConnection = require('../getConnection');

/* Los resultados de seleccionar los tweets seran
    [
        {
            id:'1';
            idUser:'13',
            userName: 'david'
            text:'un tweet'
            image:null,
            likes:14,
            likedByMe:false,
            owner:true,
            createdAt:'2022-12-03,
        }
    ]
    */

const selectTweetsByIdQuery = async (idTweet, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        let [tweets] = await connection.query(
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

module.exports = selectTweetsByIdQuery;
