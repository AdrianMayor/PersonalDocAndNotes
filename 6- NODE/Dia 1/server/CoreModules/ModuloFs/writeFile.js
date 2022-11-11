const fs = require("fs/promises");
const path = require("path");

//Funcion que escribe  un fichero
const main = async () => {
  try {
    // Creamos la ruta abosoluta al fichero que queremos crear
    const filePath = path.join(__dirname, "data", "colors.txt");

    // Contenido del fichero
    const fileContent = "Yellow - Black - Blue - Red";

    // Creamos el archivo. Pasamos como argumentos la ruta absoluta y el contenido del fichero
    await fs.writeFile(filePath, fileContent);

    console.log("El archivo creado");
  } catch (err) {
    console.error(err);
  }
};

main();
