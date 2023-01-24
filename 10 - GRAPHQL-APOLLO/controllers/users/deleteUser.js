const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);

const deleteUser = (_, args) => {
    const { id } = args;

    const user = db.prepare('SELECT * FROM users WHERE id = ?').all(id)[0];

    if (!user) {
        throw new Error('El usuario no existe');
    }

    db.prepare('DELETE FROM users WHERE id = ?').run(id);

    return 'Usuario eliminado';
};

module.exports = deleteUser;
