var baseUrl = document.location.origin;
$(document).ready(function(){
    $( "#submit" ).click(function() {
        var data= {name:$("#name").val(),
                   email:$("#email").val(),
                   pass:$("#pass").val()
                   //"avatar":url_,     
                   //"active":$("#active").val()
                  }
        var url = "/user";
        var endpoint = baseUrl + url;
        startAjax(data, endpoint, "POST");
    /* validacion de datos

    */
        return false;
    });

    function startAjax(data, url, type) {
        console.log("entramos a ajax");
        console.log(data);
        $.ajax({
            url: url,
            data: data,
            type: type,
            dataType: "json"
        })
        .done(function( data, textStatus, jqXHR ) {
                console.log("User registered successfully");
            $("#message").text("Usuario registrado");
            
        })
        
        .fail(function( jqXHR, textStatus, errorThrown ) {
                console.log( "Register new user failed: " +  textStatus);  
        });

    }

});







