const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const userController = require("./controllers/userController");
const loginController = require("./controllers/loginController");
const userRegister=require("./controllers/userRegister");
const sendEmail = require("./controllers/emailController");
const recoverPass = require("./controllers/recoverPassController");
const modifyPass = require("./controllers/modifyPassController");
const activeAccount = require("./controllers/activeAccountController");
//const validation = require("./middleware");


app.route("/user")
    .get(userController.getUser)
    .post(/*validation,*/userController.postUser)
         
app.route("/user/:_id")
    .put(userController.updateUser)
    .delete(userController.deleteUser)
    .get(userController.getById)

app.route("/user/:email")
    .post(userController.getUserByEmail)

app.route("/login/:email/:pass")
    .post(loginController.getByEmail)

app.route("/")
    .get(loginController.getLoginView)

app.route("/register")
    .get(userRegister.getRegisterView)
   // .post(userRegister.postRegister)

app.route("/recoverPass")
    .get(recoverPass.getRecoverPassView)

app.route("/modifyPass/:_id")
    .get(modifyPass.getModifyPassView)
    .put(userController.updateUserById);

app.route("/activeAccount/:_id")
    .get(activeAccount.getActiveAccountView)

module.exports = app;


