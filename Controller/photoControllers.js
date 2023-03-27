const photo = require("../models/photos");

const createphotos = async(req, res, next) => {
    try {
        const { album_id , user_id , name , image_url} = req.body;
        const photos = { album_id , user_id, name , image_url };
        const data = await new photo(photos).save();
        res.status(200).send(data);

    } catch (e) {
        next(e)
    }
};



//view photoss
const viewphotos = async(req, res, next) => {
    try {
        const photos = await photo.find();
        res.status(200).send(photos);
    } catch (e) {
        next(e);
    }
}
//view photos
const viewphoto = async(req, res, next) => {
    try {
        const photos = await photo.findById(req.params.id);
        res.status(200).send(photos);
    } catch (e) {
        next(e);
    }
}
//view photos with USer info
const viewphotosUser = async(req, res, next) => {
    try {
        const photos = await photo.find({ "user_id" : req.params.userId}).populate("user_id");
        res.status(200).send(photos);
    } catch (e) {
        next(e);
    }
}
const viewphotosAlbum = async(req, res, next) => {
    try {
        const photos = await photo.find({"album_id": req.params.albumId}).populate('album_id');
        res.status(200).send(photos);
    } catch (e) {
        next(e);
    }
}
//photos edit
const editphotos = async(req, res, next) => {
try {
    const photos = await photo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).send(photos);
} catch (e) {
    next(e);
}
}
//delete photos
const removephotos = async(req, res, next) => {
    try {
        const photos= await photo.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send(photos);
    } catch (e) {
        next(e);
    }
    }

module.exports = {
    createphotos,removephotos,editphotos,viewphoto,viewphotos,viewphotosUser,viewphotosAlbum
}