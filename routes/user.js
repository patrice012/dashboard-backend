const express = require('express');
const userRoute = express.Router();
const validator = require('../middleware/validationMiddleware');
const userValidationSchema = require('../models/user/userValidation');
const userFunctions = require('../controllers/user');


userRoute.get('/', userFunctions.user_list)

userRoute.get('/:id', userFunctions.user_get);

userRoute.post('/', validator(userValidationSchema), userFunctions.user_post);

userRoute.delete('/:id', userFunctions.user_delete);

userRoute.put('/:id', userFunctions.user_put);


module.exports = userRoute;