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

       if(!email || !pass){
            $("#message").text("Email o contraseña incorrectos");
            console.log("email o contraseña vacios");
            return false; //con esta cadena pagina no se recarga despues de click de boton si formulario vacio
        }else{
            var data= {email:email,
                       pass:pass
                      }
            var url = "/login";
            console.log("url: "+url);
            console.log(data);
            startAjax(data, url, "POST");
        }
    });

    function startAjax(data, url, type) {
        console.log("entramos a ajax");
        // console.log("url completa: "+baseUrl+url);
        $.ajax({
            url: baseUrl + url,
            data: data,
            type: type,
            dataType: "json"
        })
            .done(function( data, textStatus, jqXHR ) {
            console.log("Ajax done y La solicitud se a completado");
            console.log('data: '+data);
            console.log('textStatus: '+textStatus);
            console.log('jqXHR: '+jqXHR);
            
            if(jqXHR.status == 204){
                console.log("Email no existe o contraseña es invalido: "+textStatus);
                $("#message").text("Email no existe o contraseña es invalido");
                return false; //con esta cadena pagina no se recarga despues de click de boton si formulario vacio
            }else{
                ses_id = data[0]._id;
                console.log(ses_id);
                sessionStorage.setItem('session', ses_id);
                console.log(sessionStorage.getItem('session'));
                location.href = baseUrl+"/admin";
            }

        })
            .fail(function( jqXHR, textStatus, errorThrown ) {
            console.log("La solicitud es erronea");
            if(jqXHR.status == 403){
                console.log("Usuario no activado");
                $("#message").text("Usuario no activado");
                return false; //con esta cadena pagina no se recarga despues de click de boton si formulario vacio
            }else if(jqXHR.status == 404){
                console.log("No hay tal usuario.");
                $("#message").text("Error interno del servidor");
            }else if(jqXHR.status == 400){
                console.log("Campos vacios");
                $("#message").text("Campos vacios");
            }

        });

    }

});