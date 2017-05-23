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
const admin = require("./controllers/adminController");
const validation = require ('./middleware/middlewarevalidation');
//const validation = require("./middleware");

//onsole.log(middlewarevalidation)
app.route("/user")
    .get(userController.getUser)
    .post(validation, userController.postUser)
         
app.route("/user/:_id")
    .put(validation, userController.updateUser)
    .delete(userController.deleteUser)
    .get(userController.getById)

app.route("/user/:email")
    .post(validation, userController.getUserByEmail)


// Esto de aquí es una broma no?
// un post que es un get con el password???????? 
app.route("/login")
    .post(validation, loginController.postByEmail)

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

app.route("/admin")
    .get(admin.getAdminView)

module.exports = app;


