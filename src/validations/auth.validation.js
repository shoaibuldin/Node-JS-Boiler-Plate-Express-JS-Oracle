const Joi = require('joi');

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string(),
});

const register = Joi.object({
    email: Joi.string().required(),
    password: Joi.string(),
    age: Joi.number().required().max(150).min(12),
});


module.exports = {
    login,
    register
}