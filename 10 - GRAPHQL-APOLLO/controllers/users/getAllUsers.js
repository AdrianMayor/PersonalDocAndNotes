const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);

const getAllUsers = () => {
    // Seleccionamos a todos los usuarios.
    const users = db.prepare('SELECT * FROM users').all();

    return users.map((user) => {
        return {
            ...user,
            role: db
                .prepare('SELECT name FROM roles WHERE id = ?')
                .all(user.idRole)[0].name,
        };
    });
};

module.exports = getAllUsers;
