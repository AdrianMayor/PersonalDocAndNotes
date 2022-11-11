const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');
const { generateError } = require('../../helpers');

const addPhotoToEntry = async (req, res, next) => {
    try {
        const { idEntry } = req.params;
        let entry = await selectEntryByIdQuery(idEntry);

        console.log('entro a ver el entry', entry.photos);
        entry = Object.keys(entry.photos);

        if (!req.files) throw generateError('No hay foto adjunta', 400);

        /*         if (Object.keys(req.files).length > 0){

        } */

        console.log(entry);

        if (entry.photos.length < 3) console.log('estamos dentro');
    } catch (err) {
        next(err);
    }
};

module.exports = addPhotoToEntry;
