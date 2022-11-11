

const voteEntries = (req,res,next) => {
    try {
        const { idEntry } = req.params;

        const like = await insertLikeQuery(idEntry, req.user.id);

    } catch (err) {
        next(err);
    }
}

module.exports=voteEntries;