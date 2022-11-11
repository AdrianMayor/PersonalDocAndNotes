const selectTweetsByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');

const getTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        const tweet = await selectTweetsByIdQuery(idTweet, req.user?.id);

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

module.exports = getTweet;
