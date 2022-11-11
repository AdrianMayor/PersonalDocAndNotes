const insertLikeQuery = require('../../db/tweetQueries/insertLikeQuery');
const selectTweetByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');

const likeTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        // Comprobamos si el tweet existe, en caso de que no exista generamos un error
        await selectTweetByIdQuery(idTweet, req.user.id);

        const like = await insertLikeQuery(idTweet, req.user.id);

        res.send({
            status: 'ok',
            message: like ? 'Like enviado' : 'Like eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = likeTweet;
