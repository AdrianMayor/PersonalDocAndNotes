const insertTweetQuery = require('../../db/tweetQueries/insertTweetQujery');
const { generateError, savePhoto } = require('../../helpers');

const newTweet = async (req, res, next) => {
    try {
        const { text } = req.body;

        if (!text) {
            throw generateError('Faltan Campos', 400);
        }

        // Variable donde almacenaremos el nombre de la imagen
        let image;

        // Si existe avatar lo guardamos en una carpeta del servidor y posteriormente
        // guardamos el nombre del archivo en la base de datos.
        if (req.files?.image) {
            // Guardamos el avatar en el disco duro y obtenemos el nombre.
            image = await savePhoto(req.files.image);
        }

        // Insertamos el tweet y obtenemos la info del tweet
        const tweet = await insertTweetQuery(req.user.id, text, image);

        res.send({
            status: 'ok',
            data: {
                tweet,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newTweet;
