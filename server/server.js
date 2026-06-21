const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(
    "mongodb+srv://ronshatach222_db_user:pnC1ACsfmjtrcFn0@cluster0.4ytsvqe.mongodb.net/?appName=Cluster0"
)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });
const playerSchema = new mongoose.Schema({
    name: String
});

const Player = mongoose.model("Player", playerSchema);
app.post("/players", async (req, res) => {
    const player = await Player.create({
        name: req.body.name
    });

    res.json(player);
});
app.get("/players", async (req, res) => {
    const players = await Player.find();

    res.json(players);
});


app.get("/keep-alive", (req, res) => {
    res.json(true);
});

app.listen(6969, () => {
    console.log("Server running on port 6969");
});