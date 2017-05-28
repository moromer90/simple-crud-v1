var baseUrl = document.location.origin;
var ses_id;
$(document).ready(function(){
    
    $("#register").attr("href", baseUrl+"/register");
    $("#recoverPass").attr("href", baseUrl+"/recoverPass");
    $("#login").click(function() {   
        console.log("Click login");

        var email = $("#email").val();
        console.log("email: " + email);

        var pass = $("#pass").val();
        console.log("pass: "+pass);

/*        if(!email || !pass){
            console.log("email o contraseña vacios");
            $("#message").text("Email o contraseña incorrectos");
        }else{
*/
            var data= {email:email,
                       pass:pass
                      }
            var url = "/login";
            console.log("url: "+url);
            console.log(data);
            startAjax(data, url, "POST");
 /*       }*/
            startAjax(data, url, "POST");
    });

    function startAjax(data, url, type) {
        console.log("entramos a ajax");
        console.log("url completa: "+baseUrl+url);
        $.ajax({
            url: baseUrl + url,
            data: data,
            type: type,
            dataType: "json"
        })
            .done(function( data, textStatus, jqXHR ) {
            console.log("La solicitud se a completado");
            console.log(data);
            
            if(jqXHR.status == 204){
                console.log("Email o contraseña incorrectos: "+textStatus);
                $("#message").text("Email o contraseña incorrectos");
            }else{
                ses_id = data[0]._id;
                console.log(ses_id);
                sessionStorage.setItem('session', ses_id);
                console.log(sessionStorage.getItem('session'))
                location.href = baseUrl+"/admin";
            }

        })
            .fail(function( jqXHR, textStatus, errorThrown ) {

            if(jqXHR.status == 403){
                console.log(textStatus);
                $("#message").text("Usuario no activado");
            }else if(jqXHR.status == 500){
                console.log(textStatus);
                $("#message").text("Error interno del servidor");
            }

        });

    }

});