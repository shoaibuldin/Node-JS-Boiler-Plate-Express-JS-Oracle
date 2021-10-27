const logger = require("../config/logger");
const {userModel} = require("../model");
const {ApiError} = require("../payload/ApiError");
const {ApiResponse} = require("../payload/ApiResponse");
const jwt = require('jsonwebtoken');


const login = (email, password) => {

    logger.info(`Authentication on email ${email} and password ${password}`);

    let user = userModel.getUserByEmailAndPassword(email, password);
    if (user.length <= 0){
        throw new ApiError(401, "Email or password does not match");
    }

    let token = jwt.sign({user}, process.env.JWT_SECRET_KEY);

    return {accessToken: token};
}


module.exports={
    login
}