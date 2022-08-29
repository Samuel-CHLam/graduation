const mongoose = require("mongoose");

const VenueTimeSchema = new mongoose.Schema(
    {
        time: {type: String, required: true, unique: true},
        venue: {type: String, required: true},
    },
);

module.exports = mongoose.model("VenueTime", VenueTimeSchema)