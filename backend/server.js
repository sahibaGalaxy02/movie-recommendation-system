const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("Mongo URI:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("CONNECTED"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend is running");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
