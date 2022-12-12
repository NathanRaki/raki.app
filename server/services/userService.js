const User = require(__dirname + "/../models/User");

exports.getAllUsers = async () => {
    try {
        return await User.find();
    } catch(err) {
        console.log(err);
    }
}

exports.getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch(err) {
        console.log(err);
    }
}

exports.deleteAllUsers = async () => {
    try {
        return await User.deleteMany();
    } catch(err) {
        console.log(err);
    }
}

exports.getUserByFilter = async (filter) => {
    try {
        return await User.findOne(filter);
    } catch(err) {
        console.log(err);
    }
}