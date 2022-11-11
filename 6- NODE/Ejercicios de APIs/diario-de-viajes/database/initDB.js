require('dotenv').config();

const getConnection = require('./getConnection');
const bcrypt = require('bcrypt');

async function main() {
    let connection;

    try {
        connection = await getConnection();

        console.log('Creando tablas...');

        await connection.query('DROP TABLES IF EXISTS likes');
        await connection.query('DROP TABLES IF EXISTS entries');
        await connection.query('DROP TABLES IF EXISTS users');

        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL, 
                avatar VARCHAR(100),
                role ENUM('admin', 'normal') DEFAULT 'normal',
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP 
            )
            `
        );

        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS entries (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users (id),
                title VARCHAR(50) NOT NULL,
                description VARCHAR(250) NOT NULL,
                image VARCHAR(50) NOT NULL,
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP NOT NULL
             )
            `
        );

        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS likes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                rate ENUM('1','2','3','4','5') DEFAULT '1',
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users (id),
                idEntries INT UNSIGNED NOT NULL,
                FOREIGN KEY (idEntries) REFERENCES entries (id),
                createdAt TIMESTAMP NOT NULL
            )
            `
        );

        console.log('Tablas Creadas!');

        const hashedPassword = await bcrypt.hash('123456', 10);

        await connection.query(
            `
            INSERT INTO users (username, email, password, role, createdAt, modifiedAt)
            VALUES ( 'admin', 'admin@admin.com', ?, 'admin', ?, ?)
            `,
            [hashedPassword, new Date(), new Date()]
        );

        console.log('Usuario adminnistrador creado!');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release();
    }
}

main();
