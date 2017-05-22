const User = require ('../models/userModel')

exports.postByEmail = function (req,res) {
    console.log("Email: "+req.body.email);
    console.log("Pass: "+req.body.pass);
    User.find({email:req.body.email,pass:req.body.pass}, function(err,user){
        if(err){
            return res.status(500).send("Error: "+ err.message);
        }
        
        console.log("User length: "+user.length);
        console.log("User: "+user);
        
        if(!user[0]){
            console.log("User vacio");
            return res.status(204).send(err);
        }else if(!user[0].activate){
            console.log("Usuario no activado");
            return res.status(401).send(err);
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

