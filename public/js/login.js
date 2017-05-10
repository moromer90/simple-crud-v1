var baseUrl = document.location.origin;
$(document).ready(function(){
   $("#login").click(function() {   
       console.log("Click login");
       
        var email = $("#email").val();
       console.log("email: " + email);
       
        var pass = $("#pass").val();
        console.log("pass: "+pass);
       
        var url = "/user/"+email+"/"+pass;
       console.log("url: "+url);
        startAjax(null, url, "POST");
        
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
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "Register new user failed: " +  textStatus);
        });
        
    }

});