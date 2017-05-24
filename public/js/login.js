var baseUrl = document.location.origin;
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
            console.log("email o contraseña vacios");
        }else{

            var data= {email:email,
                       pass:pass
                      }

            var url = "/login";
            console.log("url: "+url);
            startAjax(data, url, "POST");
        }

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
                console.log(textStatus);
            }else{
                location.href = baseUrl+"/admin";
            }

        })
            .fail(function( jqXHR, textStatus, errorThrown ) {

            if(jqXHR.status == 403){
                console.log(textStatus);
            }else if(jqXHR.status == 403){
                console.log(textStatus);
            }else if(jqXHR.status == 500){
                console.log(textStatus);
            }

        });

    }

});