const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');
const deleteEntryQuery = require('../../db/entryQueries/deleteEntryQuery');

const { deletePhoto, generateError } = require('../../helpers');

const deleteEntry = async (req, res, next) => {
    try {
        const { idEntry } = req.params;

        const entry = await selectEntryByIdQuery(idEntry);

        if (entry.idUser !== req.user.id && req.user.role !== 'admin') {
            throw generateError('No tienes suficientes permisos', 401);
        }

        if (entry.photos.length > 0) {
            for (const photo of entry.photos) {
                await deletePhoto(photo.name);
            }
        }

        await deleteEntryQuery(idEntry);

        res.send({
            status: 'ok',
            message: 'Entrada eliminada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteEntry;
