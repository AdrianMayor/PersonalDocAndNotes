const selectTweetByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');
const deleteTweetByIdQuery = require('../../db/tweetQueries/deleteTweetByIdQuery');
const { deletePhoto, generateError } = require('../../helpers');

const deleteTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        const tweet = await selectTweetByIdQuery(idTweet, req.user?.id);

        // Si no somos propietarios del tweet no podemos borrarlo
        if (tweet.idUser !== req.user.id)
            throw generateError('No tienes suficientes permisos');

        // Si hay foto en el tweet la eliminamos
        if (tweet.image) await deletePhoto(tweet.image);

        // Eliminamos el tweet
        await deleteTweetByIdQuery(idTweet, req.user.id);

        res.send({
            status: 'ok',
            data: {
                message: 'Tweet Eliminado',
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteTweet;
