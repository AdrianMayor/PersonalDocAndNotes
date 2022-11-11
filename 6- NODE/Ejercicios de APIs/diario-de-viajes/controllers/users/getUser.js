const selectOwnUserById = require('../../database/userQueries/selectOwnUserById');

const getUser = async (req, res, next) => {
    try {
        const idUser = req.user.id;

        const user = await selectOwnUserById(idUser);

        res.send({
            status: 'ok',
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getUser;
