const AuthModel = require("../models/authUser/authModel");

const authUser_list = async (req, res) => {
    try {
        const result = await AuthModel.find().sort("-createdAt");
        if (!result) {
            res.status(404).json({ message: "Not found" });
            return;
        }
        res.json(result);
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

const authUser_get = async (req, res) => {
    try {
        const result = await AuthModel.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: "Not found" });
            return;
        }
        res.json(result);
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

const authUser_post = async (req, res) => {
    try {
        const authUser = new AuthModel({
            username: req.body.username,
            picture: req.file.filename,
        });
        const newData = await authUser.save();
        res.status(201).json(newData);
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

module.exports = { authUser_get, authUser_list, authUser_post };
