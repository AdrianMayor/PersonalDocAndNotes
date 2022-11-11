const mysql = require('mysql2/promise');

// Importamos variables '.env' como variables de entorno mediante 'process.env' haciendo destructuring
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

// Variable que almacenara un pool (un listado) de conexiones.
let pool;

// Función que retorna una conexión libre
const getDB = async () => {
    try {
        // Si no hay un pool de conexiones lo creamos.
        if (!pool) {
            pool = mysql.createPool({
                connectionlimit: 10, // Vamos a establecer un limite de 10 conexiones a la BBDD
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                timezone: 'Z',
            });
        }

        // Retornamos una conexion libre
        return await pool.getConnection();
    } catch (err) {
        console.error(err);
        throw new Error('Error al conectar con MySQL');
    }
};

// Exportamos la funcion.
module.exports = getDB;
