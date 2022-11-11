const selectUserByIdQuery = require('../../db/userQueries/selectUserByIdQuery');
const updateUserAvatarQuery = require('../../db/userQueries/updateUserAvatarQuery');
const { generateError, deletePhoto, savePhoto } = require('../../helpers');

/*
const editAvatarUser = async (req, res, next) => {

    
    if(!req.files?.avatar) {throw generateError('No hay avatar que actualizar', 400)};
    
    const userAvatar = await selectUserByIdQuery(req.user.id).avatar;

    let avatar;
    
    if (req.files?.avatar){
        if(userAvatar) await deletePhoto(userAvatar);
    }
    
    avatar = await savePhoto(req.files.avatar);
    
}

module.exports = editAvatarUser; */

const editAvatarUser = async (req, res, next) => {
    try {
        let avatar;

        if (!req.files?.avatar) throw generateError('No hay avatar', 400);

        const userAvatar = await selectUserByIdQuery(req.user.id).avatar;

        if (req.files?.avatar) {
            if (userAvatar) await deletePhoto(userAvatar);

            avatar = await savePhoto(req.files.avatar);
        }

        avatar = avatar || userAvatar;

        await updateUserAvatarQuery(avatar, req.user.id);

        res.send({
            status: 'ok',
            message: 'Avatar editado con éxito',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editAvatarUser;
