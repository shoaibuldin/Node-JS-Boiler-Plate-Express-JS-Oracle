let status = require('http-status');
const {ApiError} = require("../payload/ApiError");

const validate = (schema) => (req, res, next) => {

    let {value, error} = schema.validate(req.body);

    if (error) {
        let message = error.details[0].message;
        let state = status.BAD_REQUEST;

        return res.status(state).send(new ApiError(state, message));
    }

    next();
}

/*class ApiError extends Error{
    constructor(statusCode, message){
        super(message);
    }
}*/


module.exports = validate;