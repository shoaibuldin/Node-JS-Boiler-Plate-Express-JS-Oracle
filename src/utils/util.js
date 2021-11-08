const handleAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((error) => next(error));
}

const parseDatabaseObject = (data) => {

    if(!data.metaData || !data.rows){
        return data;
    }

    let columns = data.metaData;
    let rows = data.rows;
    let array = [];

    rows.forEach((row, i) => {
        var obj = {};
        columns.map((r, c) => {
            obj[r.name] = row[c];
        });
        array.push(obj);
    });
    return array;
};

module.exports = {
    parseDatabaseObject,
    handleAsync
}