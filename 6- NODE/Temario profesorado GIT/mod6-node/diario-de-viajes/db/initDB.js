require('dotenv').config();

const getConnection = require('./getConnection');

const bcrypt = require('bcrypt');

async function main() {
    let connection;

    try {
        connection = await getConnection();

        console.log('Borrando tablas...');

        await connection.query('DROP TABLE IF EXISTS entry_votes');
        await connection.query('DROP TABLE IF EXISTS entry_photos');
        await connection.query('DROP TABLE IF EXISTS entries');
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
                registrationCode VARCHAR(100),
                active BOOLEAN DEFAULT false,
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS entries (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(30) NOT NULL,
                place VARCHAR(30) NOT NULL,
                description TEXT NOT NULL,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users(id),
                createdAt TIMESTAMP NOT NULL
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS entry_photos (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                idEntry INT UNSIGNED NOT NULL,
                FOREIGN KEY (idEntry) REFERENCES entries(id),
                createdAt TIMESTAMP NOT NULL,
                modifiedAt TIMESTAMP
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS entry_votes (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                value TINYINT UNSIGNED NOT NULL,
                CONSTRAINT votes_CK1 CHECK (value IN (1, 2, 3, 4, 5)),
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES users(id),
                idEntry INT UNSIGNED NOT NULL,
                FOREIGN KEY (idEntry) REFERENCES entries(id),
                createdAt TIMESTAMP NOT NULL
            )
        `);

        console.log('¡Tablas creadas!');

        const hashedPassword = await bcrypt.hash('123456', 10);

        await connection.query(
            `
                INSERT INTO users (username, email, password, role, active, createdAt)
                VALUES ('admin', 'admin@admin.com', ?, 'admin', true, ?)
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

main();
