var baseUrl = document.location.origin;

$(document).ready(function(){
    
    $("#recoverPass").click(function(){
        
        console.log("recover pass click");
        
        var email = $("#email").val();
        if (email=="") {
        $("#message").text("Campo vacio, rellena porfa email ");    
        }
        else {
        console.log("email: "+email);
        var data = null;
        var url = "/recoverPass/"+email;
        var endpoint = baseUrl + url;
        console.log(baseUrl+url);
        $("#message").text("Enviando email...");
        startAjax(data, endpoint, "GET");
        }
        
        
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
            console.log("pass send");
            $("#message").text("Email enviado");
            
        })
        
        .fail(function( jqXHR, textStatus, errorThrown ) {
                /*console.log( "textStatus: " +  textStatus);  
                console.log( "jqXHR " +  jqXHR.status);  
                console.log( "errorThrown " +  errorThrown.status); */
                if (jqXHR.status = 404) {
                    $("#message").text("Email que has rellenado no existe. Comprueba y rellena otra vez");
                }
                else if (jqXHR.status === 0) {
                msg = 'Not connect.\n Verify Network.';}
                
        });

    }
});