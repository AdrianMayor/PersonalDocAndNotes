const getConnection = require('../getConnection');

const insertLikeQuery = async (idEntry) => {
    let connection;
    try {
        connection = await getConnection();

        const [likes] = connection.query(
            `
        SELECT rate FROM likes WHERE 
    `
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertLikeQuery;
