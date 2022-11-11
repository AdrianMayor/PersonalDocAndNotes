const getConnection = require('./getConnection');

async function main() {
    // Variable que almacenara una conexion libre con la base de datos
    let connection;

    try {
        connection = await getConnection();

        console.log('Conexion establecida');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release();
    }
}

// Llamamos a la funcion anterior

main();
