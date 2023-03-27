const express = require("express");
const route = express.Router();
const AlbumController = require("../Controller/albumControllers");
//Album route
route.get("/", AlbumController.viewAlbums);
route.get("/:id", AlbumController.viewAlbum);
route.post("/", AlbumController.createAlbum);
route.put('/:id',AlbumController.editAlbum);
route.delete('/:id',AlbumController.removeAlbum);
route.get('/user/:userId',AlbumController.viewAlbumUser)
  


module.exports = route;