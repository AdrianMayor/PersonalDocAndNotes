/* 
    Sharp proporciona una manera de gestionar archivos de imagenes

    Instalamos sharp -> npm i sharp -> Se instala en node_modules (que a su vez se instala en el root del proyecto)

*/
const sharp = require("sharp");

const image = sharp(imagePath); //  Cargamos la imagen en sharp

image.resize(resize); //  Si existe reize hacemos el resize

image.composite([
  {
    input: watermarkPath,
    top: 20,
    left: 20,
  },
]);

image.toFile(); // Guardamos la imagen con otro nombre en outputPath
