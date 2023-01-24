const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);

const getUserById = (_, args) => {
    const { id } = args;

    const user = db.prepare(`SELECT * FROM users WHERE id = ?`).all(id)[0];

    if (!user) {
        throw new Error('El usuario no existe');
    }

    return {
        ...user,
        role: db
            .prepare('SELECT name FROM roles WHERE id = ?')
            .all(user.idRole)[0].name,
    };
};

module.exports = getUserById;
