const Joi = require('joi');

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string(),
});

const register = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string(),
    confirmPassword: Joi.ref('password'),
});


module.exports = {
    login,
    register
}