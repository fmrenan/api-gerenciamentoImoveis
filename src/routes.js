const express = require("express");

const UserController = require("./controllers/UserController");
const PropertyController = require("./controllers/PropertyController");
const LoginController = require("./controllers/LoginController");
const jwtAuth = require("./Auth/jwtAuth");

const routes = express.Router();

//User resources
routes.get("/users", UserController.findAll); 
routes.get("/users/:user_id", UserController.findById); 
routes.post("/users", UserController.insert); 
routes.put("/users/:user_id", UserController.update); 
routes.delete("/users/:user_id", UserController.delete); 

//Property resources
routes.get("/properties", jwtAuth.verify, PropertyController.findAll); 
routes.get("/properties/:property_id", jwtAuth.verify, PropertyController.findById); 
routes.post("/properties", jwtAuth.verify, PropertyController.insert); 
routes.put("/properties/:property_id", jwtAuth.verify, PropertyController.update); 
routes.delete("/properties/:property_id", jwtAuth.verify, PropertyController.delete); 

//Login resources
routes.post("/login", LoginController.signIn)

module.exports = routes; 