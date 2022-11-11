const fs = require('fs/promises');
const path = require('path');

// Importamos el fichero JSON. Automáticamente "require" lo transforma
// en un objeto JavaScript por lo que ya tenemos un array de objetos.
const users = require('../users.json');

// Creamos la ruta absoluta al fichero "users.json".
const usersPath = path.join(__dirname, '..', 'users.json');

// Pusheo un usuario.
users.push({
    name: 'Sonia',
    age: 25,
});

// Función que actualiza el fichero "users.json".
const main = async () => {
    try {
        // Creamos o modificamos el archivo de usuarios.
        await fs.writeFile(usersPath, JSON.stringify(users));

        console.log('Fichero de usuarios actualizado');
    } catch (err) {
        console.error(err);
    }
};

main();
