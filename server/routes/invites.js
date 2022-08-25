const router = require("express").Router();
const Invite = require("../models/Invite");

// Get an Invite by website name
router.get("/name/:websiteName", async (req, res) => {
    const websiteName = req.params.websiteName;
    console.log(websiteName);
    try {
        let invites;
        if (websiteName) {invites = await Invite.find({"website_name": websiteName });} else {websites = await Invite.find();}
        res.status(200).json(invites);
    } catch (err) {res.status(500).json(err)};
});


// Create invite
router.post("/", async (req, res) => {
    const newInvite = new Invite(req.body);
    try {
        const savedInvite = await newInvite.save();
        res.status(200).json(savedInvite);
    } catch (err) {res.status(500).json(err)}
});

// Update Invite
router.put("/:id", async (req, res) => {
    try {
        const invite = await Invite.findById(req.params.id);
        try {
            const updatedInvite = await Invite.findByIdAndUpdate (req.params.id, {
                $set:req.body
            }, 
            {new: true}
            );
            res.status(200).json(updatedInvite);
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Delete Invite
router.delete("/:id", async (req, res) => {
    try {
        const invite = await Invite.findById(req.params.id);
        try {
            await invite.delete();
            res.status(200).json("Teaching has been deleted.");
        } catch (err) {res.status(500).json(err)};
    } catch (err) {res.status(500).json(err)};
});

// Get an Invite
router.get("/:id", async (req, res) => {
    try {
        const invite = await Invite.findById(req.params.id);
        res.status(200).json(invite);
    } catch (err) {res.status(500).json(err)};
});

module.exports = router;