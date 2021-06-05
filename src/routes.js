const express = require("express");

const UserController = require("./controllers/UserController");
const PropertyController = require("./controllers/PropertyController");

const routes = express.Router();

//User resources
routes.get("/users", UserController.findAll); 
routes.get("/users/:user_id", UserController.findById); 
routes.post("/users", UserController.insert); 
routes.put("/users/:user_id", UserController.update); 
routes.delete("/users/:user_id", UserController.delete); 

//Property resources
routes.get("/properties", PropertyController.findAll); 
routes.get("/properties/:property_id", PropertyController.findById); 
routes.post("/properties", PropertyController.insert); 
routes.put("/properties/:property_id", PropertyController.update); 
routes.delete("/properties/:property_id", PropertyController.delete); 

module.exports = routes; 