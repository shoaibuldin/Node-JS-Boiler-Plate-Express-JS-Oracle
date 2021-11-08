const logger = require("../config/logger");
const {userModel} = require("../model");
const {ApiError} = require("../payload/ApiError");
const {ApiResponse} = require("../payload/ApiResponse");
const jwt = require('jsonwebtoken');


const login = async (email, password) => {

    logger.info(`Authentication on email ${email} and password ${password} by using jwt`);

    let user = await userModel.getUserByEmailAndPassword(email, password);
    console.log(user);
    if (!user || user.length <= 0) {
        throw new ApiError(401, "Email or password does not match");
    }

    let token = jwt.sign({user}, process.env.JWT_SECRET_KEY);

    return {accessToken: token};
}

const register = async (user) => {
    let err = '';

    // TODO:
    // check the email already exist if yes throw error account already exist.
    // if not then create

    let result = await userModel.create(user);
    if (!result)
        err = 'Something went wrong';

    return {result, err};
}

module.exports = {
    login,
    register
}