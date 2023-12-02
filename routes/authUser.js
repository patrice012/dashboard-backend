const express = require("express");
const authRoute = express.Router();
const upload = require("../middleware/multerMiddleware");
const validator = require("../middleware/validationMiddleware");
const AuthUserValidationSchema = require("../models/authUser/authValidation");

authRoute.post(
    "/",
    upload.single("image"),
    validator(AuthUserValidationSchema),
    (req, res) => {
        console.log(req.body);
        console.log(req.file);
        res.json({ message: "success" });
        return;
    }
);

module.exports = authRoute;
