const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

db.connect = () => {
    db.mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        init();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
}

function init() {
    db.role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new db.role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("Added 'user' to roles collection");
            });

            new db.role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("Added 'moderator' to roles collection");
            });

            new db.role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("Added 'admin' to roles collection");
            });
        }
    })
}

module.exports = db;