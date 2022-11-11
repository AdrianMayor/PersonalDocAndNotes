const getConnection = require('../getConnection');

const insertTweetQuery = async (idUser, text, image) => {
    let connection;

    try {
        connection = await getConnection();

        // Si queremos obtener el id con el que ha sido guardado el nuevo tweet en la base de datos es necesario acceder al objeto que hay en la posicion 0' del array que devuelve connection.query

        // Loque nos interesa de lo que devuelve el metodo query sobre las peticiones de tipo insert, update y delete es la primera posicion del array
        const [newTweet] = await connection.query(
            `   
                INSERT INTO tweets (idUser, text, image, createdAt)
                VALUES(?,?,?,?)
            `,
            [idUser, text, image, new Date()]
        );

        // Retornamos la info del tweet
        return {
            id: newTweet.insertId,
            idUser,
            text,
            image,
            createdAt: new Date(),
        };
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertTweetQuery;
