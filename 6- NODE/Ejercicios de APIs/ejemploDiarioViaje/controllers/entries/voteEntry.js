const selectEntryByIdQuery = require('../../db/entryQueries/selectEntryByIdQuery');
const insertVoteQuery = require('../../db/entryQueries/insertVoteQuery');

const { generateError } = require('../../helpers');

const voteEntry = async (req, res, next) => {
    try {
        const { idEntry } = req.params;

        const { value } = req.body;

        const entry = await selectEntryByIdQuery(idEntry);

        if (entry.idUser === req.user.id) {
            throw generateError('No puedes votar tu propia entrada', 403);
        }

        await insertVoteQuery(value, req.user.id, idEntry);

        res.send({
            status: 'ok',
            message: 'Entrada votada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = voteEntry;
