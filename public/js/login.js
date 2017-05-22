var baseUrl = document.location.origin;
$(document).ready(function(){
    $("#login").click(function() {   
        console.log("Click login");

        var email = $("#email").val();
        console.log("email: " + email);

        var pass = $("#pass").val();
        console.log("pass: "+pass);

        var url = "/login/"+email+"/"+pass;
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
            console.log(data);
            if(jqXHR.status == 204){
                console.log(textStatus);
            }else{
                location.href = baseUrl+"/admin";
            }

        })
            .fail(function( jqXHR, textStatus, errorThrown ) {

            if(jqXHR.status == 401){
                console.log(textStatus);
            }

        });

    }

});