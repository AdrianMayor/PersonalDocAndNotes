const fs = require("fs/promises");
const path = require("path");

// Funcion que comprueba que un path (ruta) existe en disco
async function pathExists(path) {
  try {
    await fs.access(path); // fs.access comprueba que puede acceder a una ruta, si no puede acceder da un error, si existe simplemente entra y no dice nada.
  } catch (err) {
    throw new Error(`La ruta ${path} no existe`);
  }
}

// Funcion que crea una ruta en disco si no existe
async function createPathIfNotExists(path) {
  try {
    await fs.access(path);
  } catch (err) {
    await fs.mkdir(path); // fs.mkdir -> crea un directorio
  }
}

module.exports = {
  pathExists,
  createPathIfNotExists,
};
