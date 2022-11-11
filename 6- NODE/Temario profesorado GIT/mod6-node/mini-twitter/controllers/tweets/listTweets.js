const selectAllTweetsQuery = require('../../db/tweetQueries/selectAllTweetsQuery');

const listTweets = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        const tweets = await selectAllTweetsQuery(req.user?.id, keyword);

        res.send({
            status: 'ok',
            data: {
                tweets,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listTweets;
