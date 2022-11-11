/* 
    Nos permite leer, crear, escribir o borrar ficheros y directorios.

Este módulo proporciona una versión síncrona y otra asíncrona. Intentaremos usar siempre la asíncrona dado que proporciona un mejor rendimiento. Veamos varios ejemplos equivalentes:
*/

//### Escribiendo ficheros

const fs = require("fs/promises");
// const fs = require("fs").promises;

async function myFunction() {
  try {
    await fs.writeFile("mensaje.txt", "Hola, mundo!");
  } catch (err) {
    console.error(err);
  }
}

myFunction();

// ### Leyendo ficheros

const fs = require("fs/promises");
// const fs = require("fs").promises;

async function myFunction() {
  try {
    const data = await fs.readFile("mensaje.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

myFunction();

// ### Borrando ficheros

const fs = require("fs/promises");
// const fs = require("fs").promises;

async function myFunction() {
  try {
    await fs.unlink("mensaje.txt");
  } catch (err) {
    console.error(err);
  }
}

myFunction();

// ### Ver metadata de un fichero

const fs = require("fs/promises");
// const fs = require("fs").promises;

async function myFunction() {
  try {
    const data = await fs.stat("mensaje.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

myFunction();

/* 


   ------ METODOS DE FS --------
*/

fs.access(); // -> accede a la ruta, si puede acceder no dice nada, si no accede da un error
fs.mkdir(); // -> crea una ruta
fs.readdir(); // -> lee los archivos de una ruta y devuelve un array con el nombre de los archivos
