const insertEntryQuery = require('../../db/entryQueries/insertEntryQuery');
const insertPhotoQuery = require('../../db/entryQueries/insertPhotoQuery');

const { savePhoto, generateError } = require('../../helpers');

const newEntry = async (req, res, next) => {
    try {
        const { title, place, description } = req.body;

        if (!title || !place || !description) {
            throw generateError('Faltan campos', 400);
        }

        const idEntry = await insertEntryQuery(
            title,
            place,
            description,
            req.user.id
        );

        // Array donde pushearemos el nombre de las fotos (si hay);
        const photos = [];

        // Si "req.files" existe y si la longitud del array que retorna "Object.keys" es mayor
        // que cero quiere decir que al menos hay una foto, por tanto, procedemos a guardarla.
        if (req.files && Object.keys(req.files).length > 0) {
            // Recorremos las fotos y por si las moscas recortamos el array para
            // que solo haya tres fotos como máximo
            for (const photo of Object.values(req.files).slice(0, 3)) {
                // Guardamos la foto en el disco.
                let photoName = await savePhoto(photo);

                // Pusheamos la foto al array de fotos.
                photos.push(photoName);

                // Guardamos la foto en la base de datos.
                await insertPhotoQuery(photoName, idEntry);
            }
        }

        res.send({
            status: 'ok',
            data: {
                entry: {
                    id: idEntry,
                    title,
                    place,
                    description,
                    photos,
                    idUser: req.user.id,
                    createdAt: new Date(),
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newEntry;
