/* 
        MODULO PATH
*/

const path = require("path"); // Trabajar de forma segura con las rutas del sistema

// Ruta absoluta al fichero "users.json"
const usersPath = path.join(__dirname, "users.json");

console.log("Ruta del json", usersPath);

// Extension del fichero "users.json". Requiere de una ruta absoluta como argumento
const usersExt = path.extname(usersPath);

console.log(`La extension del fichero "users.json" es: ${usersExt}`);
