const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);

const updatePass = (_, args) => {
    const { id, password } = args;

    const user = db.prepare('SELECT * FROM users WHERE id = ?').all(id)[0];

    if (!user) {
        throw new Error('El usuario no existe');
    }

    db.prepare('UPDATE users SET password = ? WHERE id = ?').run(password, id);

    return 'Usuario actualizado';
};

module.exports = updatePass;
