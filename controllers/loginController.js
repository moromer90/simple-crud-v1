const User = require ('../models/userModel')

exports.getByEmail = function (req,res) {
    console.log("Email: "+req.params.email);
    console.log("Pass: "+req.params.pass);
    User.find({email:req.params.email,pass:req.params.pass}, function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        
        console.log("Hola "+user.name);
        if(req.params.pass === user.pass){
            return res.send(user);
        }
        return res.send("Contraseña incorrecta");
    });
}

