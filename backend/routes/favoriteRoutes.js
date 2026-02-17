const express = require("express");
const router = express.Router();

const Favorite = require("../models/Favorite");

router.post("/", async (req, res) => {
    const favorite = new Favorite(req.body);
    await favorite.save();
    res.json(favorite);
});

router.get("/", async (req, res) => {
    const favorites = await Favorite.find();
    res.json(favorites);
});

router.delete("/:id", async (req, res) => {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
