const router = require("express").Router();
const Code = require("../models/Code");

// Create Code
router.post("/", async (req, res) => {
    const newCode = new Code(req.body);
    try {
        const savedCode = await newCode.save();
        res.status(200).json(savedCode);
    } catch (err) {res.status(500).json(err)}
});

// Get Code
router.get("/", async (req, res) => {
    try {
        const codes = await Code.find();
        res.status(200).json(codes);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;