const User = require ('../models/userModel');
const updateActive = require ('../controllers/userController');

exports.getActiveAccountView = function(req,res){
    
    console.log("updateUserById");
    var userId = req.params._id;
    var update = {active:"true"};
    var mensaje= "Usuario activado corretamente"+userId;
    
    //    console.log(userId);
    console.log(update);
    console.log(userId);
    User.findByIdAndUpdate(userId,{$set:update},{new:true},function(err,user){
        if(err){
            //return res.status(400).send("Error: "+ err.message);
            mensaje="Algo se pasa malo"+res.status(400);
        }
        else if (userId) {
            mensaje= "Enlace no esta correcto. Pruebalo una vez mas"
        }
        console.log(user);
//        res.send(user);
    });
    
    res.render('../views/activeAccount.hbs',{
    pageTitle:"ActiveAccount",
    content: mensaje
    });
        
}