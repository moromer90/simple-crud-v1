const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
const userRegister=require("./controllers/userRegister");
//const validation = require("./middleware");


app.route("/user")

    .get(userController.getUser)
    .post(/*validation,*/userController.postUser)
         
app.route("/:id")
//    .get(controller.getById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

app.route("/login/:email/:pass")
    
    .post(loginController.getByEmail)


app.route("/login")
    .get(loginController.getLoginView)

app.route("/register")
    .get(userRegister.getRegisterView)
   // .post(userRegister.postRegister)

module.exports = app;


