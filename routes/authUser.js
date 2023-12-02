const express = require("express");
const authRoute = express.Router();
const upload = require("../middleware/multerMiddleware");
const validator = require("../middleware/validationMiddleware");
const AuthUserValidationSchema = require("../models/authUser/authValidation");
const authUserFunc = require("../controllers/authUser");

authRoute.get("/", authUserFunc.authUser_list);

authRoute.get("/:id", authUserFunc.authUser_get);

authRoute.post(
    "/",
    upload.single("image"),
    validator(AuthUserValidationSchema),
    authUserFunc.authUser_post
);

module.exports = authRoute;
