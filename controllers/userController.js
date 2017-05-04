const User = require ('/models/userModel')

exports.getUser = function (req,res) {
     User.find({}, function(err,user){
        if(err){
            return res.send("Error: "+ err.message);
        }
        console.log(user);
        return res.send(user);
    });
}