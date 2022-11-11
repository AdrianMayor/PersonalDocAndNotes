const selectEntriesByIdQuery = require('../../database/entriesQueries/selectEntriesByIdQuery');
const getEntry = async (req, res, next) => {
    try {
        const { idEntry } = req.params;

        const entries = await selectEntriesByIdQuery(idEntry);

        res.send({
            status: 'ok',
            data: {
                entries,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getEntry;
