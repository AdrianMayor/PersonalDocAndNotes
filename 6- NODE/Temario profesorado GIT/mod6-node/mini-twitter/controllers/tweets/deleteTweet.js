const selectTweetByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');
const deleteTweetByIdQuery = require('../../db/tweetQueries/deleteTweetByIdQuery');

const { deletePhoto, generateError } = require('../../helpers');

const deleteTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        const tweet = await selectTweetByIdQuery(idTweet, req.user?.id);

        // Si no somos los propietarios del tweet lanzamos un error.
        if (tweet.idUser !== req.user.id) {
            throw generateError('No tienes suficientes permisos', 401);
        }

        // Si el tweet tiene vinculada una imagen la borramos.
        if (tweet.image) {
            await deletePhoto(tweet.image);
        }

        await deleteTweetByIdQuery(idTweet);

        res.send({
            status: 'ok',
            message: 'Tweet eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteTweet;
