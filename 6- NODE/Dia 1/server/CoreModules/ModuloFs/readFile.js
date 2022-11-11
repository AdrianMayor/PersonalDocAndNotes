const fs = require("fs/promises");
const path = require("path");

//Funcion que lee el contenido de un fichero
const main = async () => {
  try {
    // Creamos la ruta absoluta al fichero que queremos leer.
    const filePath = path.join(__dirname, "data", "hello.txt");

    // Leemos el archivo. El metodo "readFile" requiere como primer argumento la ruta del archivo y como segundo argumento la codificacion
    const data = await fs.readFile(filePath, "utf-8");

    console.log(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("No se ha encontrado el archivo o directorio");
    } else {
      console.error(err);
    }
  }
};

main();
