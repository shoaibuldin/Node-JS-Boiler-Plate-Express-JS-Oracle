const status = require("http-status");
const logger = require('../config/logger.js');
const {authService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");

const login = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authService.login(email, password);

    res.status(status.OK)
        .send(new ApiResponse(status.OK,
            "Login Successfully",loginResponse));

}






const register = (req, res) => {

    res.status(status.NOT_IMPLEMENTED)
        .send('Not yet implemented');

}

module.exports = {
    login,
    register
}