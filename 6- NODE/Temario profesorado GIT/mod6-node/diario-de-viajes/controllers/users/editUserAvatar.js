const updateAvatarQuery = require('../../db/userQueries/updateAvatarQuery');
const selectUserByIdQuery = require('../../db/userQueries/selectUserByIdQuery');

const { savePhoto, deletePhoto, generateError } = require('../../helpers');

const editAvatar = async (req, res, next) => {
    try {
        if (!req.files?.avatar) {
            throw generateError('Faltan campos', 400);
        }

        const user = await selectUserByIdQuery(req.user.id);

        if (user.avatar) {
            await deletePhoto(user.avatar);
        }

        const avatarName = await savePhoto(req.files.avatar);

        await updateAvatarQuery(avatarName, req.user.id);

        res.send({
            status: 'ok',
            message: 'Avatar actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editAvatar;
