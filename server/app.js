const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send([
        { title: "Note 1", content: "Content 1"},
        { title: "Note 2", content: "Content 2"},
        { title: "Note 3", content: "Content 3"},
        { title: "Note 4", content: "Content 4"},
    ]);
});

app.listen("3001", () => {
    console.log("Service running on port 3001.")
});