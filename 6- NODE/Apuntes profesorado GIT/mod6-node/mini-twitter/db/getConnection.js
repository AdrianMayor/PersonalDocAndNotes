const mysql = require('mysql2/promise');

// Variable que almacenará un pool (un listado) de conexiones.
let pool;

// Función que retorna una conexión libre.
const getConnection = async () => {
    try {
        // Si no hay un pool de conexiones lo creamos.
        if (!pool) {
            pool = mysql.createPool({
                connectionLimit: 10,
                host: 'localhost',
                user: 'demo',
                password: '123456',
                database: 'minitwitter',
                timezone: 'Z',
            });
        }

        // Retornamos una conexión libre.
        return await pool.getConnection();
    } catch (err) {
        console.error(err);
        throw new Error('Error al conectar con MySQL');
    }
};

// Exportamos la función.
module.exports = getConnection;
