const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');
const insertEntryPhotoQuery = require('../../db/entryQueries/insertEntryPhotoQuery');

const { savePhoto, generateError } = require('../../helpers');

const addEntryPhoto = async (req, res, next) => {
    try {
        const { idEntry } = req.params;

        if (!req.files?.photo) {
            throw generateError('Faltan campos', 400);
        }

        const entry = await selectEntryByIdQuery(idEntry);

        if (entry.idUser !== req.user.id) {
            throw generateError('No tienes suficientes permisos', 401);
        }

        if (entry.photos.length > 2) {
            throw generateError(
                'La entrada tiene tres fotos asignadas, elimina una foto antes de agregar otra',
                403
            );
        }

        const photoName = await savePhoto(req.files.photo);

        await insertEntryPhotoQuery(photoName, idEntry);

        res.send({
            status: 'ok',
            message: 'Foto insertada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = addEntryPhoto;
