const Album = require("../models/album");

const createAlbum = async(req, res, next) => {
    try {
        const { user_id, name } = req.body;
        const album = { user_id, name };
        const data = await new Album(album).save();
        res.status(200).send(data);

    } catch (e) {
        next(e)
    }
};



//view Albums
const viewAlbums = async(req, res, next) => {
    try {
        const album = await Album.find();
        res.status(200).send(album);
    } catch (e) {
        next(e);
    }
}
//view Album
const viewAlbum = async(req, res, next) => {
    try {
        const album = await Album.findById(req.params.id);
        res.status(200).send(album);
    } catch (e) {
        next(e);
    }
}
//view ALbum with USer info
const viewAlbumUser = async(req, res, next) => {
    try {
        const album = await Album.find({ "user_id" : req.params.userId}).populate("user_id");
        res.status(200).send(album);
    } catch (e) {
        next(e);
    }
}
//ALbum edit
const editAlbum = async(req, res, next) => {
try {
    const album = await Album.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send(album);
} catch (e) {
    next(e);
}
}
//delete ALbum
const removeAlbum = async(req, res, next) => {
    try {
        const album= await Album.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send(album);
    } catch (e) {
        next(e);
    }
    }

module.exports = {
    createAlbum,removeAlbum,editAlbum,viewAlbum,viewAlbums,viewAlbumUser
}