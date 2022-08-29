const router = require("express").Router();
const VenueTime = require("../models/VenueTime");

// Create VenueTime
router.post("/", async (req, res) => {
    const newVenueTime = new VenueTime(req.body);
    try {
        const savedVenueTime = await newVenueTime.save();
        res.status(200).json(savedVenueTime);
    } catch (err) {res.status(500).json(err)}
});

// Get VenueTime
router.get("/", async (req, res) => {
    try {
        const venueTimes = await VenueTime.find();
        res.status(200).json(venueTimes);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;