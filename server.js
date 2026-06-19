const express = require("express");

const app = express();

app.get("/keep-alive", (req, res) => {
    res.json(true);
});

app.listen(6969, () => {
    console.log("Server running on port 6969");
});