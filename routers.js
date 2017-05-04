const express = require('express');
const mongoose =  require ('mongoose');
const app = express();
const controller = require("./controllers/userController");
//const validation = require("./middleware");


app.route("/user")
    .get(controller.getUser)
//    .post(/*validation,*/controller.post)
         
app.route("/:_id")
//    .get(controller.getById)
//    .put(/*validation,*/controller.put)
//    .delete(controller.delete)



module.exports = app;


