const minimist = require("minimist");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

const { pathExists, createPathIfNotExists } = require("./helpers");

console.log(chalk.green("Welcome to Image Process v1.0"));
console.log("");

// Esta funcion hace el trabajo de procesado
async function processImages({ inputDir, outputDir, watermark, resize }) {
  try {
    const inputPath = path.resolve(__dirname, inputDir);
    const outputPath = path.resolve(__dirname, outputDir);
    let watermarkPath;

    if (watermark) {
      watermarkPath = path.resolve(__dirname, watermark);
    }

    // Comprobar que inputDir existe
    await pathExists(inputPath);

    // Crear si no existe outputDir
    await createPathIfNotExists(outputPath);

    // Si existe watermark comprobar que el archivo watermark existe
    if (watermarkPath) {
      await pathExists(watermark);
    }

    // Leer los archivos de inputDir
    const inputFiles = await fs.readdir(inputPath); // -> devuelve el nombre de los archivos de una ruta

    // Quedarme solo con los archivos que sean imagenes
    const imageFiles = inputFiles.filter((file) => {
      const validExtensions = [".jpg", ".jpeg", ".gif", ".png", ".webp"];

      return validExtensions.includes(path.extname(file).toLowerCase());
    });

    // Recorrer toda la lista de archivos y:
    //  - Si existe resize redimensionar cada una de las imágenes
    //  - Si existe watermark colocar el watermark en la parte inferior derecha de la imagen
    //  - Guardar la imagen resultante en el outputDir
    for (const imageFile of imageFiles) {
      console.log(chalk.blue(`Procesando imagen: ${imageFile}`));

      //  obtener la ruta de los archivos independientemente del sistema operativo
      const imagePath = path.resolve(inputPath, imageFile);

      //  Cargamos la imagen en sharp
      const image = sharp(imagePath);

      //  Si existe reize hacemos el resize
      if (resize) {
        image.resize(resize);
      }

      //  Si existe watermarPath colocamos el watermark
      if (watermarkPath) {
        image.composite([
          {
            input: watermarkPath,
            top: 20,
            left: 20,
          },
        ]);
      }

      // Guardamos la imagen con otro nombre en outputPath
      await image.toFile(path.resolve(outputPath, `processed_${imageFile}`));
    }
  } catch (err) {
    console.error(chalk.red(err.message));
    console.error(chalk.red("Comprueba que los argumentos sean correctos"));
    process.exit(1);
  }
}

/* 

--- Comprobamos si esta bien formateado --- 

*/

// Proceso los argumentos
//console.log(process.argv.slice(2));
const args = minimist(process.argv.slice(2)); // -> minimist se encarga de procesar los argumentos y colocarlos en un objeto en propiedad:valor | Tiene una propiedad '_' en la que se recoge todos los valores que no estan asociados a una propiedad. (todos los argumentos que no tienen un nombre asociado)
console.log();
const { inputDir, outputDir, watermark, resize } = args;

//Si no existe inputDir o outputDir muestro error y salgo del programa
if (!inputDir || !outputDir) {
  console.error(
    chalk.red("Los argumentos --inputDir y --outputDir son obligatorios")
  );
  process.exit(1);
}

// Si no existe watermark y no existe resize salgo del programa
if (!watermark && !resize) {
  console.error(
    chalk.red("Es necesario que exista un argumento --watermark o --resize")
  );
  process.exit(1);
}

// Si todos los argumentos estan correctos , seguimos.
console.log(chalk.blue("Procesando imagenes..."));
console.log("");

processImages({
  inputDir,
  outputDir,
  watermark,
  resize,
});
