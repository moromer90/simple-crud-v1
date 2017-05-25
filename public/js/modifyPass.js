var baseUrl = document.location.origin;

$(document).ready(function(){
    var allUrl = document.location+ "";
    var urlsplit = allUrl.split("/");
    var id = urlsplit[4];
    console.log("url: "+id);

    $("#confirmar").click(function(){

        console.log("confirmar click");
        
        let pass = $("#pass").val();
        let pass2 = $("#pass2").val();

        console.log(pass);
        console.log(pass2);

        if(pass === pass2){

            var data= {pass:pass}
            var url = "/modifyPass/"+id;
            var endpoint = baseUrl + url;
            console.log(baseUrl+url);
            startAjax(data, endpoint, "PUT");

        }else{
            $("#message").text("Las contraseñas no coinciden. Vuelva a intentarlo.");
            pass = $("#pass").val("");
            pass2 = $("#pass2").val("");
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
                console.log("Pass update successfully");
            $("#message").text("Contraseña actualizada con exito");
            
        })
        
        .fail(function( jqXHR, textStatus, errorThrown ) {
                console.log( "Pass update failed: " +  textStatus);  
            if(jqXHR.status == 400){
                console.log("La solicitud contiene sintaxis errónea y no debería repetirse");
                $("#message").text("Fallo al actualizar contraseña");
            }
        });

    }


});