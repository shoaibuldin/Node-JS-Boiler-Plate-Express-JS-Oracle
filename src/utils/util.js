const handleAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((error) => next(error));
}

const parseDatabaseObject = (data) => {
    console.log(data);
    // if the database has rows
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