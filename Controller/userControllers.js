const User = require("../models/user")

const createUser = async(req, res, next) => {
    try {
        const { first_name,last_name,phone_number } = req.body;
        const user = { first_name,last_name,phone_number  };
        const data = await new User(user).save();
        res.status(200).send(data);

    } catch (e) {
        next(e)
    }
};



//view User
const viewUsers = async(req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
}
//view User
const viewUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
}
//user profile edit
const editUser = async(req, res, next) => {
try {
    const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send(user);
} catch (e) {
    next(e);
}
}
const removeUser = async(req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
    }

module.exports = {
    createUser,viewUsers,viewUser,editUser,removeUser
}