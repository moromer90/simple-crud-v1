const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
//const validation = require("./middleware");


app.route("/user")

    .get(userController.getUser)
    .post(/*validation,*/userController.postUser)
         
app.route("/user/:_id")
//    .get(controller.getById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

//app.get('/about', (req, res) => {
//res.render('about.hbs');
//})

app.route("/login/:email/:pass")
    .post(loginController.getByEmail)

app.route("/login")
    .get(loginController.getLoginView)

module.exports = app;


