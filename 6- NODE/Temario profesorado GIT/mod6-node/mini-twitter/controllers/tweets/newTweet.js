const insertTweetQuery = require('../../db/tweetQueries/insertTweetQuery');

const { generateError, savePhoto } = require('../../helpers');

const newTweet = async (req, res, next) => {
    try {
        const { text } = req.body;

        if (!text) {
            throw generateError('Faltan campos', 400);
        }

        // Variable donde almacenaremos el nombre de la imagen.
        let image;

        // Si existe imagen la guardamos en una carpeta del servidor y posteriormente
        // guardamos el nombre del archivo en la base de datos.
        if (req.files?.image) {
            // Guardamos la imagen en el disco duro y obtenemos el nombre.
            image = await savePhoto(req.files.image);
        }

        // Insertamos el tweet y obtenemos la info del tweet.
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
