const handleAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((error) => next(error));
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