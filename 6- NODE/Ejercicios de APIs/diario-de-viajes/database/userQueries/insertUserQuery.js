const getConnection = require('../getConnection');
const bcrypt = require('bcrypt');

const { generateError } = require('../../helpers');

const insertUserQuery = async (username, email, password) => {
    let connection;
    try {
        connection = await getConnection();

        // Obtenemos un array de usuarios en base al email  -> Comprobar que no se repita email
        const [emailUsers] = await connection.query(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        // Si existe algun usuario con ese email lanzamos un error
        if (emailUsers.length > 0) {
            throw generateError(
                'Ya existe un usuario con ese email en la base de datos',
                403
            );
        }

        // Obtenemos un array de usuarios en base al username  -> Comprobar que no se repita username
        const [usernameUsers] = await connection.query(
            'SELECT id FROM users WHERE username = ?',
            [username]
        );

        // Si existe algun usuario con ese username lanzamos un error
        if (usernameUsers.length > 0) {
            throw generateError(
                'Ya existe un usuario con ese username en la base de datos',
                403
            );
        }

        // Encriptamos la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creamos / guardamos el usuario
        await connection.query(
            `INSERT INTO users (username, email, password, createdAt, modifiedAt) VALUES (?, ?, ?, ?, ?)`,
            [username, email, hashedPassword, new Date(), new Date()]
        );
    } finally {
        /* catch (error) -> No hace falta catch , porque usa el de 'controllers/users/newUser.js'*/
        if (connection) connection.release();
    }
};

module.exports = insertUserQuery;

/*  
Cuando hacemos una query sobre un SELECT devuelve un array de arrays. 

La informacion de las consultas se encontraran siempre en la primera posicion de este array; siendo a su vez un array de objetos. Cada objeto es un resultado de busqueda, con sus propiedades.

Ejemplo: 

    data = [
                [{}, {}, {}], <- Aqui estaran los resultados de la busqueda
                [...],
                [...],
            ]

Por tanto mediante destructuring nos quedamos con el primer array:
    const [primerArray] = await connection.query();
*/
