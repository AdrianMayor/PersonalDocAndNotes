const fs = require('fs/promises');
const path = require('path');

// Función que elimina un fichero.
const main = async () => {
    try {
        // Creamos la ruta absoluta al fichero que queremos eliminar.
        const filePath = path.join(__dirname, 'data', 'colors.txt');

        // Eliminamos el archivo utilizando la ruta absoluta.
        await fs.unlink(filePath);

        console.log('Archivo eliminado');
    } catch (err) {
        console.error(err);
    }
};

main();
