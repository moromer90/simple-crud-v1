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


exports.postUser = function (req,res) {
	console.log("req.body = "+req.body)
    var newUser = new User({   name: req.body.name,
                               email:req.body.email,
                               pass: req.body.pass,
                               active:req.body.active,
                               img: req.body.img
                             });
     console.log("NewUser = "+newUser);
            newUser.save(function(err,user){
                if(err){
                    return res.send("Error: "+ err.message + ".....");
                }
                console.log("NewUser function SAVE true = "+newUser);
                res.send(newUser + "\n Insert realizado con exito");
            });

}

exports.updateUser = function (req,res) {
    var userId = req.params._id;
    var update = req.body;
    console.log(userId);
    console.log(update);
    User.findOneAndUpdate(userId,update,{new:true},function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user + "\n Actualizacion realizada con exito");
    });
}

exports.deleteUser = function (res,req){
    User.findOneAndRemove({_id:req.params._id},function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user + "\n Borrado realizado con exito");
    });

}