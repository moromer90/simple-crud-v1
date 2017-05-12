const User = require ('../models/userModel')
// creo que no uasamos esta funccion poraue lo usa jQuery y Cliente
/*exports.postRegister = function (req,res) {
    var newReg = new User ({"name" : req.params.name,
                       "email":req.params.email,
                       "pass":req.params.pass
                       //"avatar":url_,     
                       //"active":$("#active").val()
                      });
        newReg.save(function (err, newUser) {
          if (err) return handleError(err);
          res.send(newUser);
          // saved!
        })
}
*/
exports.getRegisterView = function(req,res){
    res.render('../views/register.hbs',{
    pageTitle:"Register new user",
//    content:"Contenido de la página"
    });
        console.log("aaaaaaaaaaa");
}




