const fs = require("fs/promises");
const path = require("path");

// Importamos el fichero JSON. Automaticamente "requiere" lo transforma en un objeto JS por lo que ya tenemos un array de objetos
const users = require("../users.json");

// Creamos la ruta absoluta al fichero users.json
const userspath = path.join(__dirname, "..", "users.json");

// Pusheo un usuario
users.push({
  name: "Sonia",
  age: 25,
});

// Funcion que actualiza el fichero "users.json"

const main = async () => {
  try {
    // Creamos o modificamos el fichero users json
    await fs.writeFile(userspath, JSON.stringify(users));

    console.log("Fiuchero de usuarios actualizado");
  } catch (err) {
    console.error(err);
  }
};

main();
