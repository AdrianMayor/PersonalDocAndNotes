const fs = require('fs/promises');
const path = require('path');

// Función que lee el contenido de un fichero.
const main = async () => {
    try {
        // Creamos la ruta absoluta al fichero que queremos leer.
        const filePath = path.join(__dirname, 'data', 'helloo.txt');

        // Leemos el archivo. El método "readFile" requiere como primer argumento
        // la ruta del archivo y como segundo argumento la codificación.
        const data = await fs.readFile(filePath, 'utf-8');

        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

main();
