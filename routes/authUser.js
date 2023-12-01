const express = require("express");
const authRoute = express.Router();
const upload = require("../middleware/multerMiddleware");

authRoute.post("/",upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json({ message: "success" });
    return;
});

module.exports = authRoute;
