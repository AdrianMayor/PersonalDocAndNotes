const getConnection = require('./getConnection');

async function main() {
    // Variable que almacenará una conexión libre con la base de datos.
    let connection;

    try {
        connection = await getConnection();

        console.log('Conexión establecida');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release();
    }
}

// Llamamos a la función anterior.
main();
