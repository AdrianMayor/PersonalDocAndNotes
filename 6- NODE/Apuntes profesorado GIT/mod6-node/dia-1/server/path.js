const path = require('path');

// Ruta absoluta al fichero "users.json".
const usersPath = path.join(__dirname, 'users.json');

console.log(usersPath);

// Extensión del fichero "users.json". Requiere de una ruta absoluta como
// argumento.
const usersExt = path.extname(usersPath);

console.log(`La extension del fichero "users.json" es: [${usersExt}]`);
