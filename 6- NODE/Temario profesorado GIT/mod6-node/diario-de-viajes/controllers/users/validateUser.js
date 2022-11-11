const selectUserByRegCodeQuery = require('../../db/userQueries/selectUserByRegCodeQuery');
const updateUserRegCodeQuery = require('../../db/userQueries/updateUserRegCodeQuery');

const validateUser = async (req, res, next) => {
    try {
        const { registrationCode } = req.params;

        const user = await selectUserByRegCodeQuery(registrationCode);

        await updateUserRegCodeQuery(registrationCode);

        res.send({
            status: 'ok',
            message: 'Usuario activado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = validateUser;
