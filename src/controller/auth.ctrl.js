const status = require("http-status");
const logger = require('../config/logger.js');
const {authService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");
const {handleAsync} = require("../utils/util");
const {ApiError} = require("../payload/ApiError");

const login = handleAsync(async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = await authService.login(email, password);


    let message = res.__('loginSuccess', email);

    res.status(status.OK)
        .send(new ApiResponse(status.OK, message, loginResponse));

});


const register = handleAsync(async(req, res) => {

    let user = req.body;
    let {result, err} = await authService.register(user);

    if (err){
        return res.status(status.INTERNAL_SERVER_ERROR)
            .send(new ApiError(status.INTERNAL_SERVER_ERROR, err));
    }

    res.status(status.OK).send(new ApiResponse(status.OK, res.__('registerSuccess')));
});

module.exports = {
    login,
    register
}