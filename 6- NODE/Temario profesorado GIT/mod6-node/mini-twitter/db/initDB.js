// El método "config" localiza el fichero ".env" que hayamos creado en la raíz
// del proyecto y pone disponibles las variables que figuren en ese fichero en
// el listado de variables de entorno.
require('dotenv').config();

const getConnection = require('./getConnection');
const bcrypt = require('bcrypt');

async function main() {
    // Variable que almacenará una conexión libre con la base de datos.
    let connection;

    try {
        connection = await getConnection();

        await connection.query('DROP TABLE IF EXISTS likes');
        await connection.query('DROP TABLE IF EXISTS tweets');
        await connection.query('DROP TABLE IF EXISTS users');

        console.log('Creando tablas...');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL, 
                avatar VARCHAR(100),
                role ENUM('admin', 'normal') DEFAULT 'normal',
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP NOT NULL
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS tweets (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users (id),
                text VARCHAR(250) NOT NULL,
                image VARCHAR(100),
                createdAt TIMESTAMP NOT NULL
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS likes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                value BOOLEAN DEFAULT true,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users (id),
                idTweet INT UNSIGNED NOT NULL,
                FOREIGN KEY (idTweet) REFERENCES tweets (id),
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP NOT NULL
            )
        `);

        console.log('¡Tablas creadas!');

        // Encriptamos la contraseña del usuario administrador.
        const hashedPassword = await bcrypt.hash('123456', 10);

        await connection.query(
            `
            INSERT INTO users (username, email, password, role, createdAt)
            VALUES ('admin', 'admin@admin.com', ?, 'admin', ?)
            `,
            [hashedPassword, new Date()]
        );

        console.log('¡Usuario administrador creado!');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release();
        process.exit();
    }
}

// Llamamos a la función anterior.
main();
