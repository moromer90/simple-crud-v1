const User = require ('../models/userModel');
const updateActive = require ('../controllers/userController');

exports.getActiveAccountView = function(req,res){
    
    console.log("updateUserById");
    var userId = req.params._id;
    var update = {active:"true"};
    
    //    console.log(userId);
    console.log(update);
    User.findOneAndUpdate(userId,{$set:update},{new:true},function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        res.send(user);
    });
    
    res.render('../views/activeAccount.hbs',{
    pageTitle:"ActiveAccount",
    content:"Usuario activado"
    });
        
}