const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: false},
        codes: {type: Array, required: true},
        website_name: {type: String, required: true}
    }
);

module.exports = mongoose.model("Invites", InviteSchema)