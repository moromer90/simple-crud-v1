const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
const userRegister=require("./controllers/userRegister");
const sendEmail = require("./controllers/emailController");
//const validation = require("./middleware");


app.route("/user")

    .get(userController.getUser)
    .post(/*validation,*/userController.postUser)
         
app.route("/user/:_id")
//    .get(controller.getById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)


app.route("/login/:email/:pass")
    .post(loginController.getByEmail)

app.route("/")
    .get(loginController.getLoginView)

app.route("/register")
    .get(userRegister.getRegisterView)
   // .post(userRegister.postRegister)

app.route("/sendMail")
    .get(sendEmail.emailSender)

module.exports = app;


