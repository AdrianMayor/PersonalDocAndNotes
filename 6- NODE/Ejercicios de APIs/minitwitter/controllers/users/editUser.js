const selectUserByIdQuery = require('../../db/userQueries/selectUserByIdQuery');
const updateUserQuery = require('../../db/userQueries/updateUserQuery');

const { generateError, savePhoto, deletePhoto } = require('../../helpers');

const editUser = async (req, res, next) => {
    try {
        // Obtenemos los campos del body.
        let { username, email } = req.body;

        // El avatar (los archivos) vendra en 'req.files'

        // Si no hay nada que actualizar, lanzamos error
        if (!username && !email && !req.files?.avatar) {
            throw generateError('Faltan campos', 400); // Creamos un error
        }

        // Obtenemos la info del usuario desde la BBDD
        const user = await selectUserByIdQuery(req.user.id);

        // Variable donde almacenaremos el nombre de la imagen
        let avatar;

        // Si existe avatar lo guardamos en una carpeta del servidor y posteriormente
        // guardamos el nombre del archivo en la base de datos.
        if (req.files?.avatar) {
            // Si el usuario tiene un avatar asignado lo borramos del disco duro.
            if (user.avatar) {
                await deletePhoto(user.avatar);
            }

            // Guardamos el avatar en el disco duro y obtenemos el nombre.
            avatar = await savePhoto(req.files.avatar);
        }

        // Establecemos el valor final para las variables. Si no hay una nueva me quedo con la anterior.
        username = username || user.name;
        email = email || user.eamil;
        avatar = avatar || user.avatar;

        // Actualizamos los datos del usuario
        await updateUserQuery(username, email, avatar, req.user.id);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
        });
    } catch (err) {
        /* console.error(err); -> No es necesario porque los errores se mandan al middleware de error , donde ya tienen su propio console.*/
        next(err); // Lanza el error al middleware de error
    }
};

module.exports = editUser;
