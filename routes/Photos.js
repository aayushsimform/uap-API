const express = require("express");
const route = express.Router();
const PhotoController = require("../Controller/photoControllers");

//Photo Routes
route.get("/", PhotoController.viewphotos);
route.get("/:id", PhotoController.viewphoto);
route.post("/", PhotoController.createphotos);
route.put('/:id',PhotoController.editphotos);
route.delete('/:id',PhotoController.removephotos);
route.get('/user/:userId',PhotoController.viewphotosUser);
route.get('/album/:albumId',PhotoController.viewphotosAlbum);

  
  

module.exports = route;