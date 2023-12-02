const Joi = require("joi");

const AuthUserValidationSchema = Joi.object({
    username: Joi.string().min(2).max(100).required(),
    picture: Joi.string(),
});

module.exports = AuthUserValidationSchema;
