var baseUrl = document.location.origin;

$(document).ready(function(){
    
    $("#recoverPass").click(function(){
        
        console.log("recover pass click");
        
        var email = $("#email").val();
        
        console.log("email: "+email);
        
        var data = null;
        var url = "/user/"+email;
        var endpoint = baseUrl + url;
        console.log(baseUrl+url);
        startAjax(data, endpoint, "POST");
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
            
        })
        
        .fail(function( jqXHR, textStatus, errorThrown ) {
                console.log( "textStatus: " +  textStatus);  
                console.log( "jqXHR " +  jqXHR);  
                console.log( "errorThrown " +  errorThrown);  
        });

    }
});