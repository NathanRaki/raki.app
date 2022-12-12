require('dotenv').config();
const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.text());

const db = require("./app/models");

db.connect();

require("./app/routes/auth.routes")(server);
require("./app/routes/user.routes")(server);

server.listen("3001", () => {
    console.log("Service running on port 3001.")
});