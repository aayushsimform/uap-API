const express = require("express");
const route = express.Router();
const userController = require("../Controller/userControllers");
// User Route
route.get("/", userController.viewUsers);
route.get("/:id", userController.viewUser);
route.post("/", userController.createUser);
route.put('/:id',userController.editUser);
route.delete('/:id',userController.removeUser);
  

module.exports = route;