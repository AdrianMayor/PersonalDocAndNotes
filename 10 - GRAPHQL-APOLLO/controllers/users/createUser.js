const path = require('path');
const dbPath = path.join(__dirname, '../../db/users.db');
const db = require('better-sqlite3')(dbPath);
const bcrypt = require('bcrypt');

const createUser = (_, args) => {
    const { name, password } = args.user;

    // Fecha actual en formato timpestamp.
    const now = Date.parse(new Date()) / 1000;

    // Encriptamos la contraseña.
    const hashedPass = bcrypt.hashSync(password, 10);

    db.prepare(
        `INSERT INTO users (name, password, createdAt) VALUES (?, ?, ?)`
    ).run(name, hashedPass, now);

    return 'Usuario creado';
};

module.exports = createUser;
