var baseUrl = document.location.origin;
$(document).ready(function(){
    $( "#submit" ).click(function() {
        var data= {name:$("#name").val(),
                   email:$("#email").val(),
                   pass:$("#pass").val()
                   //"avatar":url_,     
                   //"active":$("#active").val()
                  }
        console.log(data)                      ;
        var url = "/user";
        var endpoint = baseUrl + url;
        console.log(baseUrl+url);
        startAjax(data, endpoint, "POST");
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
            
        })
        
        .fail(function( jqXHR, textStatus, errorThrown ) {
                console.log( "Register new user failed: " +  textStatus);  
        });

    }

   /* function emailSender(){
        var to,subject,text;

        to=$("#email").val();
        subject="Registrar usuario";
        text="Para activar tu registro haz click en el link";
        $("#message").text("Sending E-mail...Please wait");

        var data= {
            "to":to,
            "subject":subject,
            "text":text
        }
        var url = "/sendMail";
        var endpoint = baseUrl + url;

        startAjax(data, endpoint, "POST");


    }*/

});







