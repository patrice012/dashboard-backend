const Joi = require("joi");

const userValidationSchema = Joi.object({
  name: Joi.string().min(2).max(244).required(),
  country: Joi.string().min(1).max(244).required(),
  profilImage: Joi.string(),
  language:Joi.string().required(),
  occupation: Joi.string().min(4).max(244),
  objective: Joi.string().min(4).max(244),
  subscription: Joi.string().min(4).max(100),
  selected: Joi.boolean(),
})

module.exports = userValidationSchema;