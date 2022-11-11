const mysql = require('mysql2/promise');

// const fs = require('fs/promises')

// Variable que almacenara un pool->(un listado) de conexiones.
let pool;

// Funcion que retorna una conexion libre.
const getDB = async () => {
    try {
        // Si no hay un pool de conexiones lo creamos
        if (!pool) {
            pool = mysql.createPool({
                connectionLimit: 10,
                host: 'localhost',
                user: 'demo', // Mismo usuario que en sql
                password: '123456',
                database: 'minitwitter',
                timezone: 'Z',
            });
        }

        // Retornamos una conexion libre
        return await pool.getConnection(); // Este getConnection es una porpiedad del metodo pool
    } catch (err) {
        console.error(err);
        throw new Error('Error al conectar con MySQL');
    }
};

// Exportamos la funcion
module.exports = getDB;
