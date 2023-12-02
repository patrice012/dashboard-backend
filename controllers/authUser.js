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

// handle DELETE request
const authUserr_delete = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AuthModel.findByIdAndDelete(id);
        res.json({ message: "success" });
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

// handle PUT request
const authUser_put = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AuthModel.findById(id);
        if (!user) {
            res.status(404).json({ mesage: "Not found." });
            return;
        }
        const updateData = req.body;
        for (const [key, value] of Object.entries(updateData)) {
            user[key] = value;
        }
        const newData = await user.save();
        res.json(newData);
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

// handle PATCH request
const authUser_patch = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AuthModel.findById(id);
        if (!user) {
            res.status(404).json({ mesage: "Not found." });
            return;
        }
        const updateData = req.body;
        for (const [key, value] of Object.entries(updateData)) {
            user[key] = value;
        }
        const newData = await user.save();
        res.json(newData);
        return;
    } catch {
        (error) => console.log(error);
        return;
    }
};

module.exports = {
    authUser_get,
    authUser_list,
    authUser_post,
    authUserr_delete,
    authUser_put,
    authUser_patch,
};
