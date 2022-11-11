const fs = require('fs/promises');
const path = require('path');

// Función que escribe un fichero.
const main = async () => {
    try {
        // Creamos la ruta absoluta al fichero que queremos crear.
        const filePath = path.join(__dirname, 'data', 'colors.txt');

        // Contenido del fichero.
        const fileContent = 'Yellow - Black - Blue - Red - White';

        // Creamos el archivo. Pasamos como argumentos la ruta absoluta
        // y el contenido del fichero.
        await fs.writeFile(filePath, fileContent);

        console.log('Archivo creado');
    } catch (err) {
        console.error(err);
    }
};

main();
