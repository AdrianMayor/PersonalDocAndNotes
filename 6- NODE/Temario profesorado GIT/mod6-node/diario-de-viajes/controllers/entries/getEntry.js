const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');

const getEntry = async (req, res, next) => {
    try {
        const { idEntry } = req.params;

        const entry = await selectEntryByIdQuery(idEntry);

        res.send({
            status: 'ok',
            data: {
                entry,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getEntry;
