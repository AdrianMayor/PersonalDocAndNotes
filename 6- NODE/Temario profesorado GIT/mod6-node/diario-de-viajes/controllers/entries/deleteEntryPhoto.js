const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');
const deleteEntryPhotoQuery = require('../../db/entryQueries/deleteEntryPhotoQuery');

const { deletePhoto, generateError } = require('../../helpers');

const deleteEntryPhoto = async (req, res, next) => {
    try {
        const { idEntry, idPhoto } = req.params;

        const entry = await selectEntryByIdQuery(idEntry);

        if (entry.idUser !== req.user.id) {
            throw generateError('No tienes suficientes permisos', 401);
        }

        // ¡Ojo! Cualquier id que venga de un path param será de tipo String.
        // A la hora de comparar ids tenemos que asegurarnos de que sean del mismo tipo.
        const existantPhoto = entry.photos.find(
            (photo) => photo.id === Number(idPhoto)
        );

        if (!existantPhoto) {
            throw generateError('Foto no encontrada', 404);
        }

        await deletePhoto(existantPhoto.name);

        await deleteEntryPhotoQuery(idPhoto);

        res.send({
            status: 'ok',
            message: 'Foto eliminada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteEntryPhoto;
