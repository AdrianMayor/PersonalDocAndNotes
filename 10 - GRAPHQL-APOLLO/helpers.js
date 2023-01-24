const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');
const { v4: uuid } = require('uuid');

// Generar errores.
const generateError = (message, code) => {
    const err = new Error(message);
    err.statusCode = code;
    return err;
};

// Guardar avatar en disco.
const saveAvatar = async (avatar) => {
    // Ruta absoluta al directorio de subida de imágenes.
    const uploadsPath = path.join(__dirname, process.env.UPLOADS_DIR);

    try {
        // Intentamos acceder al directorio de subida de archivos mediante el método "access".
        // Si este método genera un error quiere decir que no es posible acceder a la carpeta.
        await fs.access(uploadsPath);
    } catch {
        // Si no es posible acceder a la carpeta seguramente sea porque no existe, la creamos.
        await fs.mkdir(uploadsPath);
    }

    // Convertimos el avatar en un objeto de tipo Sharp.
    const sharpAvatar = sharp(avatar.data);

    // Redimensionamos el avatar para evitar que sea demasiado pesado. Le asignamos un ancho de
    // 60px.
    sharpAvatar.resize(60);

    // Generamos un nombre único para el avatar.
    const avatarName = `${uuid()}.jpg`;

    // Ruta absoluta donde queremos guardar el avatar.
    const avatarPath = path.join(uploadsPath, avatarName);

    // Guardamos la imagen en el directorio correspondiente.
    await sharpAvatar.toFile(avatarPath);

    // Retornamos el nombre del avatar.
    return avatarName;
};

// Eliminar avatar del disco.
const deleteAvatar = async (avatarName) => {
    try {
        // Creamos la ruta absoluta al avatar que queremos borrar.
        const avatarPath = path.join(
            __dirname,
            process.env.UPLOADS_DIR,
            avatarName
        );

        try {
            // Intentamos acceder al avatar mediante el método "access". Si no es posible
            // acceder al avatar obtendremos un error.
            await fs.access(avatarPath);
        } catch (error) {
            // Si salta un error quiere decir que la imagen no existe así que retornaremos
            // un valor booleano falso.
            return false;
        }

        // Eliminamos la imagen del disco.
        await fs.unlink(avatarPath);

        return true;
    } catch {
        throw generateError('Error al eliminar la imagen del servidor');
    }
};

module.exports = {
    generateError,
    saveAvatar,
    deleteAvatar,
};
