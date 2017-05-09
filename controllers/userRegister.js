const User = require ('../models/userModel')

exports.postRegister = function (req,res) {

    $(document).on('click', '#submit', function(e){
        e.preventDefault();
        console.log("Name: "+req.params.name);
    console.log("email: "+req.params.email);
    console.log("pass: "+req.params.pass);
        var formData= {"name":$("#name").val(),
                       "email":$("#email").val(),
                       "pass":$("#pass").val(),
                       //"avatar":url_,     
                       //"active":$("#active").val()
                      }
        var url= baseUrl + "/register";
        startAjax(formData, url, "POST");
        formData="";
        return false;
    });}


function startAjax(data, baseUrl, type) {
    console.log("entramos a ajax");
    $.ajax({
        data: data,
        type: type,
        dataType: "json",
        url: baseUrl 
    })
        .done(function( data, textStatus, jqXHR ) {
            console.log("User registered successfully");
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "Register new user failed: " +  textStatus);
        });
        
    }


exports.getRegisterView = function(req,res){
    res.render('../views/register.hbs',{
    pageTitle:"Register new user",
//    content:"Contenido de la página"
    });
        
}


