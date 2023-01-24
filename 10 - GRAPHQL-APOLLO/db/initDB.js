const path = require('path');
const bcrypt = require('bcrypt');

// Ruta absoluta al fichero que contiene la base de datos.
const dbPath = path.join(__dirname, 'users.db');

// Nos conectamos a la base de datos. Es necesario indicar la ruta absoluta
// al fichero que contiene la base de datos.
const db = require('better-sqlite3')(dbPath);

/**
 * #########################
 * ## Borramos las tablas ##
 * #########################
 */

db.exec(`DROP TABLE IF EXISTS users`);
db.exec(`DROP TABLE IF EXISTS roles`);

/**
 * ######################
 * ## Crear las tablas ##
 * ######################
 */

db.exec(`
    CREATE TABLE IF NOT EXISTS roles (
        id INTEGER UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL UNIQUE,
        createdAt TIMESTAMP NOT NULL,
        PRIMARY KEY("id" AUTOINCREMENT)
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        avatar VARCHAR(100),
        idRole INTEGER DEFAULT 2,
        createdAt TIMESTAMP NOT NULL,
        modifiedAt TIMESTAMP,
        PRIMARY KEY("id" AUTOINCREMENT),
        FOREIGN KEY (idRole) REFERENCES roles(id)
    )
`);

// Fecha actual en formato timpestamp.
const now = Date.parse(new Date()) / 1000;

/**
 * ########################
 * ## Insertar los roles ##
 * ########################
 */

db.exec(`INSERT INTO roles(name, createdAt) VALUES('admin', ${now})`);
db.exec(`INSERT INTO roles(name, createdAt) VALUES('normal', ${now})`);

/**
 * ####################
 * ## Crear usuarios ##
 * ####################
 */

const usernames = ['david95', 'paula65', 'josito32', 'sara87'];

for (const username of usernames) {
    const hashedPass = bcrypt.hashSync('123456', 10);

    db.exec(`
        INSERT INTO users(name, password, createdAt) 
        VALUES('${username}', '${hashedPass}', ${now})
    `);
}

/**
 * ##########################
 * ## Cerramos la conexión ##
 * ##########################
 */

db.close();

console.log('Base de datos creada');
