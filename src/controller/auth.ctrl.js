const status = require("http-status");
const logger = require('../config/logger.js');
const {authService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");

const login = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authService.login(email, password);


    let message = res.__('loginSuccess', email);

    res.status(status.OK)
        .send(new ApiResponse(status.OK,message,loginResponse));

}






const register = (req, res) => {

    res.status(status.NOT_IMPLEMENTED)
        .send('Not yet implemented');

}

module.exports = {
    login,
    register
}