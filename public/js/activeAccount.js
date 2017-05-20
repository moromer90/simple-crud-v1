var baseUrl = document.location.origin;

$(document).ready(function(){
    var allUrl = document.location+ "";
    var urlsplit = allUrl.split("/");
    var id = urlsplit[4];
    console.log("id: "+id);

    var data= {active:"true"}
    var url = "/user/"+id;
    var endpoint = baseUrl + url;
    console.log(baseUrl+url);
    startAjax(data, endpoint, "PUT");

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
            $("#message").text("Cuenta activada");

        })

            .fail(function( jqXHR, textStatus, errorThrown ) {
            console.log( "Account activate failed: " +  textStatus);  
        });

    }


});