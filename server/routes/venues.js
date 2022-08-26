const router = require("express").Router();
const Venue = require("../models/Venue");

// Create Venue
router.post("/", async (req, res) => {
    const newVenue = new Venue(req.body);
    try {
        const savedVenue = await newVenue.save();
        res.status(200).json(savedVenue);
    } catch (err) {res.status(500).json(err)}
});

// Get Venue
router.get("/", async (req, res) => {
    try {
        const venues = await Venue.find();
        res.status(200).json(venues);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;