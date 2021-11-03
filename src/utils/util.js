const handleAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((err) => next(err));
}

const parseDatabaseObject = (data) => {
    //TODO:
    //1.


    return data;
}

module.exports = {
    parseDatabaseObject,
    handleAsync
}