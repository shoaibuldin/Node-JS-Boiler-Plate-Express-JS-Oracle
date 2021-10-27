const status = require("http-status");
const logger = require("../config/logger");
const {userService} = require("../service");
const {ApiError} = require("../payload/ApiError");
const {ApiResponse} = require("../payload/ApiResponse");

const getAllUsers = (req, res) => {

    let users = userService.getAllUsers();
    res.status(status.OK).send(new ApiResponse(status.OK, "OK", users));
}

const getUserById = (req, res) => {
    res.status(status.NOT_IMPLEMENTED).send(new ApiError(status.NOT_IMPLEMENTED, "Not Implemented"))
}

const create = (req, res) => {
    logger.info(`Calling Create User`);

    let user = req.body;
    if (userService.isEmailExist(user.email)){
        return res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE, "User already exist"))
    }

    let createUserStatus = userService.createUser(user);
    if (createUserStatus){
        return res.status(status.OK).send(new ApiResponse(status.OK, "User is created"));
    }

    return res.status(status.OK).send(new ApiResponse(status.OK, "Something went wrong"));
}

const updateUser = (req, res) => {
    res.status(status.NOT_IMPLEMENTED).send(new ApiError(status.NOT_IMPLEMENTED, "Not Implemented"))
}

module.exports = {
    getAllUsers,
    getUserById,
    create,
    updateUser
}