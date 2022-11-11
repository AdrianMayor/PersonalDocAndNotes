/* 
    # Ejercicio node 1
Crea un programa de node que te permita guardar fechas con descripciones de eventos. Utiliza los argumentos del programa para introducir la fecha y el texto de forma que se guarde en un archivo .json. Añade también un argumento que imprima los eventos por pantalla.

*/

const minimist = require("minimist");
const fs = require("fs/promises");
const path = require("path");

const data = require("./data.json");

const args = minimist(process.argv.slice(2));

const { DATE, TEXT, SHOW } = args;

//console.log(args);

async function main() {
  try {
    const jsonPath = path.join(__dirname, ".", "data.json");

    if (DATE && TEXT) {
      data.push({
        year: DATE,
        text: TEXT,
      });

      console.log(`Añadido ${DATE} - ${TEXT}`);

      await fs.writeFile(jsonPath, JSON.stringify(data));
      console.log("Fichero actualizado");
    }

    if (SHOW) {
      const read = await fs.readFile(jsonPath, "utf-8");
      console.log(read);
    }
  } catch (err) {
    console.error(err);
  }
}

main();
