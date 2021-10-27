const logger = require("../config/logger");
const {userModel} = require("../model");

const isEmailExist = (email) => {
    return userModel.isEmailExist(email);
}


const createUser = (user) => {
    logger.info("Creating user ");
    return userModel.create(user);
}

const getAllUsers = () => {
    return userModel.getUsers();
}


module.exports = {
    isEmailExist,
    createUser,
    getAllUsers
}