const express = require("express");

const UserController = require("./controllers/UserController");

const routes = express.Router();

//User resources
routes.get("/users", UserController.findAll); 
routes.get("/users/:user_id", UserController.findById); 
routes.post("/users", UserController.insert); 
routes.put("/users/:user_id", UserController.update); 
routes.delete("/users/:user_id", UserController.delete); 

module.exports = routes; 