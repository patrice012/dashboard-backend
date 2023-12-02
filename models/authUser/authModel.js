const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 100,
        },
        picture: {
            type: String,
            get: (v) => v,
        },
    },
    { timestamps: true }
);

const AuthModel = mongoose.model("AuthUser", AuthUserSchema);

module.exports = AuthModel;
