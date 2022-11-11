const selectAllEntriesQuery = require('../../database/entriesQueries/selectAllEntriesQuery');

const getListEntries = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        const entries = await selectAllEntriesQuery(keyword);

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

module.exports = getListEntries;
