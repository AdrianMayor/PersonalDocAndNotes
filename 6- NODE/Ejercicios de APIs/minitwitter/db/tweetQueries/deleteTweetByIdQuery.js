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

const deleteTweetsByIdQuery = async (idTweet, idUser) => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(
            `
                    DELETE from tweets WHERE id = ?
                `,
            [idTweet, idUser]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteTweetsByIdQuery;
