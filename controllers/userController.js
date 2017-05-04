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
	console.log(req.body)
    var newUser = new User({   name: req.body.name,
                               email:req.body.email,
                               pass: req.body.pass,
                               active:req.body.active,
                               img: req.body.img
                             });
     console.log(newUser);
            newUser.save(function(err,user){
                if(err){
                    return res.send("Error: "+ err.message + ".....");
                }
                console.log(newUser);
                res.send(newUser + "\n Insert realizado con exito");
            });
>>>>>>> 4d4b47ee350c7c3f839c94d36d527953dca89c5e
}