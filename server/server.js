require('dotenv').config();
const express = require("express");
const cors = require("cors");
const server = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

server.use(cors(corsOptions));
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