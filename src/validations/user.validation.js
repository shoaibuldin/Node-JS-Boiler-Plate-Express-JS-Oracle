const Joi = require('joi');

const createUser = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    age: Joi.number().required().min(12).max(120)
});

const updateUser = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required(),
    age: Joi.number().required().min(12).max(120)
});

module.exports = {
    createUser,
    updateUser
}