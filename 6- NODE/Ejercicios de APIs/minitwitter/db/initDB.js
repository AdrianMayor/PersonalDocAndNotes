// Importamos el modulo 'dotenv' con el metodo "config", que localiza el fichero ".env" que hayamos creado en la raiz del proyecto y pone disponibles las variables que figuren en ese fichero (a traves de process.env)
require('dotenv').config();

const getConnection = require('./getConnection.js');
const bcrypt = require('bcrypt');

async function main() {
    let connection; // Variable que almacenara una conexion libre con la base de datos.

    try {
        connection = await getConnection(); // Intentamos conectarnos

        console.log('Creando tablas...');

        //          -> Usamos el metodo query de la conexion (let connection) | (query es una petición a la BBDD)
        //          -> El metodo query solo permite hacer una query sobre una conexion.

        await connection.query(`DROP TABLE IF EXISTS likes`);
        await connection.query(`DROP TABLE IF EXISTS tweets`);
        await connection.query(`DROP TABLE IF EXISTS users`);

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
                createdAt TIMESTAMP NOT NULL
            )
        `);

        console.log('Tablas creadas!');

        // Encriptamos la contraseña del usuario administrador con la dependencia 'bcrypt'
        const hashedPassword = await bcrypt.hash('123456', 10);

        //    Al insertar la fecha en formato ZULÚ, de forma autogenerada genera un conflicto por la zona horaria.
        await connection.query(
            `
                INSERT INTO users (username, email, password, role, createdAt)
                VALUES ( 'admin', 'admin@admin.com', ?, 'admin', ?)
        `,
            [hashedPassword, new Date()] // Cuando insertemos datos manualmente, se puede indicar un '?' en los VALUES y posteriormente indicar, mediant array de valores, el valor que queremos darle a ese registro.
        );

        console.log('Usuario administrador creado!');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) connection.release(); // En cualquier caso (conectarse o no), cerramos y liberamos la conexión
        process.exit(); // Una vez se conecte y monte la BBDD cierra el proceso de este fichero.
    }
}

// Ejecutamos la funcion anterior
main();
