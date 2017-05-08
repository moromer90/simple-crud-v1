const User = require ('../models/userModel')

exports.getUser = function (req,res) {
    User.find({}, function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        return res.send(user);
    });
}

exports.postUser = function (req, res){
    console.log("Post body:"+req.body);
    var newUser = new User({name: req.body.name, email: req.body.email, pass: req.body.pass,active:req.body.active,img: req.body.img});
    console.log("NewAUser: "+newUser);
    newUser.save(function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
            console.log("Error: "+ err.message);
        }
        console.log("User guardado");

        res.send(user + "\n Post realizado con exito");
    });
}