let status = require('http-status');
const {ApiError} = require("../payload/ApiError");
const {ApiResponse} = require("../payload/ApiResponse");
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    //check header
    let token = req.headers.accessToken;
    if (!token) {
        throw new ApiError(401, "Please provide token")
    }

    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (response && response.user) {
        next();
    }


    throw new ApiError(401, "Your authentication is now expired. Please login again")
}

module.exports = auth;