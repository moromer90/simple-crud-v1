const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
//const validation = require("./middleware");


app.route("/user")
    .get(userController.getUser)
    .post(/*validation,*/userController.postUser)
         
app.route("/:_id")
//    .get(controller.getById)
//    .put(/*validation,*/controller.put)
//    .delete(controller.delete)

app.route("/login/:email/:pass")
    .post(loginController.getByEmail)


module.exports = app;


