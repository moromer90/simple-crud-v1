const User = require ('../models/userModel')

exports.getByEmail = function (req,res) {
    console.log("Email: "+req.params.email);
    console.log("Pass: "+req.params.pass);
    User.find({email:req.params.email,pass:req.params.pass}, function(err,user){
        if(err){
            return res.status(500).send("Error: "+ err.message);
        }
        
        console.log("User: "+user.length);
        
        if(!user.length){
            console.log("User vacio");
            return res.status(204).send(err);
        }
        
        return res.send(user);
    });
}

exports.getLoginView = function(req,res){
    res.render('../views/login.hbs',{
    pageTitle:"Login",
//    content:"Contenido de la página"
    });
        
}

