const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = (_, args) => {
    const { name, password } = args.user;

    const user = db
        .prepare(`SELECT id, password, idRole FROM users WHERE name = ?`)
        .all(name)[0];

    if (!user) {
        throw new Error('El usuario no existe');
    }

    // Validamos la contraseña.
    const validPass = bcrypt.compareSync(password, user.password);

    if (!validPass) {
        throw new Error('Contraseña incorrecta');
    }

    // Dado que el nombre del rol está en una tabla aparte lo obtenemos.
    const role = db
        .prepare(`SELECT name FROM roles WHERE id = ?`)
        .all(user.idRole)[0].name;

    // Objeto con información que queremos agregar al token.
    const payload = {
        id: user.id,
        role,
    };

    const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: '7d',
    });

    return {
        token,
    };
};

module.exports = loginUser;
