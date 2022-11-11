const insertEntrieQuery = require('../../database/entriesQueries/insertEntriesQuery');
const { generateError, savePhoto } = require('../../helpers');

const newEntries = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        if (!title && !description && !req.files?.image)
            throw generateError('Faltan campos', 400);

        const imgName = await savePhoto(req.files?.image);

        await insertEntrieQuery(req.user.id, title, description, imgName);

        res.send({
            status: 'ok',
            data: {
                message: 'Entrada Creada',
            },
        });
    } catch (err) {
        next(err);
    }
};
module.exports = newEntries;
