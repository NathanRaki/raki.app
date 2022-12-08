const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send({
        users: [
            { name: "User1" },
            { name: "User2" }
        ]});
});

app.listen("3001", () => {
    console.log("Service running on port 3001.")
});