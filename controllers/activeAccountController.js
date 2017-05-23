const User = require ('../models/userModel');
const updateActive = require ('../controllers/userController');

exports.getActiveAccountView = function(req,res){

    console.log("updateUserById");
    var userId = req.params._id;
    var update = {active:"true"};
    var mensaje = "Usuario activado correctamente";

    //    console.log(userId);
    console.log(update);
    console.log("User id: "+userId);
    User.findByIdAndUpdate(userId,{$set:update},{new:true},function(err,user){
        console.log("User: "+user);
        if(err){
            //            return res.send("Error: "+ err.message);
            mensaje = res.status(404);
        }else if(user === null){
            console.log("Entra si es null");
            mensaje = "id no encontrado";
            console.log("Mensaje: "+mensaje);
        }

        console.log("Mensaje: "+mensaje);
        res.render('../views/activeAccount.hbs',{
            pageTitle:"ActiveAccount",
            content:mensaje
        });

        
    });


}