const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
//const validation = require("./middleware");


app.route("/user")
    .get(userController.getUser)
//    .post(/*validation,*/controller.post)
         
app.route("/:_id")
//    .get(controller.getById)
//    .put(/*validation,*/controller.put)
//    .delete(controller.delete)

app.route("/login/:email/:pass")
    .get(loginController.getByEmail)


module.exports = app;


