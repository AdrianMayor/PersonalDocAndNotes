const selectAllEntriesQuery = require('../../db/entryQueries/selectAllEntriesQuery');

const listEntries = async (req, res, next) => {
    try {
        const entries = await selectAllEntriesQuery();

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

module.exports = listEntries;
