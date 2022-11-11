const getConnection = require('../getConnection');

const insertTweetQuery = async (idUser, text, image) => {
    let connection;

    try {
        connection = await getConnection();

        // Variable que almacena un objeto Date con la fecha actual.
        const createdAt = new Date();

        // Si queremos obtener el id con el que ha sido guardado el nuevo tweet en la
        // base de datos es necesario acceder al objeto que hay en la posición 0 del
        // array que devuelve connection.query.
        const [newTweet] = await connection.query(
            `
                INSERT INTO tweets (idUser, text, image, createdAt)
                VALUES (?, ?, ?, ?)
            `,
            [idUser, text, image, createdAt]
        );

        // Retornamos la info del tweet.
        return {
            id: newTweet.insertId,
            idUser,
            text,
            image,
            createdAt,
        };
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertTweetQuery;
