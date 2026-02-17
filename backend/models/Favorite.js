const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    movieId: Number,
    title: String,
    poster: String
});

module.exports = mongoose.model("Favorite", favoriteSchema);
