const mongoose = require("mongoose");

const CodeSchema = new mongoose.Schema(
    {
        code: {type: String, required: true, unique: true},
        description: {type: String, required: true, unique: true},
        time: {type: String, required: false},
        venue: {type: String, required: false},
        contact: {type: String, required: false}
    },
);

module.exports = mongoose.model("Code", CodeSchema)