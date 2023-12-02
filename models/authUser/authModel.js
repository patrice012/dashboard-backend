const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 244,
    },
    picture: {
        type: String,
        get: (v) => v,
    },
});

const AuthModel = mongoose.model("AuthUser", AuthUserSchema);

module.exports = AuthModel;
