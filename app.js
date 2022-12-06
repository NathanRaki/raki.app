const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Raki.app");
});

app.listen("3000", () => {
    console.log("Service running on port 3000.")
});