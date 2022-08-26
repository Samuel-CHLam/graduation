const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema(
    {
        venueCode: {type: String, required: true, unique: true},
        venue: {type: String, required: true, unique: true},
    },
);

module.exports = mongoose.model("Venue", VenueSchema)