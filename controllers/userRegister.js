const User = require ('../models/userModel')

exports.getRegisterView = function(req,res){
    res.render('../views/register.hbs',{
    pageTitle:"Register new user",
//    content:"Contenido de la página"
    });
}




