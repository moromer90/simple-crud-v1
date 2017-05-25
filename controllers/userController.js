const User = require ('../models/userModel');
const mail = require ("./emailController");

exports.getUser = function (req,res) {
    console.log('function getUser')
    User.find({}, function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message);
        }
        if(!user){
            return res.status(404).send({message: "No existen usuarios"});
        }
        console.log(user);
        return res.send(user);
        //        return res.status(200).render("user.hbs",{user:user});
    });
}

exports.getById = function(req,res){
    console.log('function getById')
    console.log("ObjectID: "+req.params._id);
    User.find({_id:req.params._id}, function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        return res.send(user);
    });
}

exports.getUserByEmail = function(req,res) {
    console.log("function getUserByEmail");
    User.find({email:req.params.email}, function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message); 
        }
        else if(!user[0]){
            return res.status(404).send({message: "No existen usuarios"});
        }
        else if (err.estatus=0) {res.status.send({message:"No existe conexion"})}
        mail.sendEmail(req.params.email,user[0]._id, "recoverPass");

        console.log("user id: "+user[0]._id);
        return res.send(user);
    });
}


exports.postUser = function (req,res) {
    console.log('function postUser')
    var newUser = new User({
                            name: req.body.name,
                            email:req.body.email,
                            pass: req.body.pass

                           });
    console.log(newUser)
    newUser.save(function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message);
        }
        console.log("user id: "+user._id);
        
        mail.sendEmail(req.body.email,user._id,"register");
        res.send(user);
    });

}

exports.updateUser = function (req,res) {
    console.log('function updateUser')
    var userId = req.params._id;
    var update = req.body;
    //    console.log(userId);
    console.log(update);
    User.findOneAndUpdate(userId,update,{new:true},function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user);
    });
}

exports.deleteUser = function (req,res){
    var userId = req.params._id;
    //console.log(userId);
    //console.log(req.params.name);
    User.findOneAndRemove(userId,function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user + "\n Borrado realizado con exito");
    });
}

exports.updateUserById = function (req,res) {
    console.log("updateUserById");
    var userId = req.params._id;
    var update = req.body;
    
    //    console.log(userId);
    console.log(update);
    User.findByIdAndUpdate(userId,{$set:update},{new:true},function(err,user){
        if(err){
            return res.status(400).send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user);
    });
}


