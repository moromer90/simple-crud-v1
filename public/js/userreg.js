$( "#submit" ).click(function() {
        var formData= {"name":$("#name").val(),
                       "email":$("#email").val(),
                       "pass":$("#pass").val(),
                       //"avatar":url_,     
                       //"active":$("#active").val()
                      }
        console.log(formData);
        var url= baseUrl + "/register";
        console.log(url);
        startAjax(formData, url, "POST");
        formData="";
        return false;
});



function startAjax(data, baseUrl, type) {
    console.log("entramos a ajax");
    $.ajax({
        data: data,
        type: type,
        dataType: "json",
        url: baseUrl 
    })
        .done(function( data, textStatus, jqXHR ) {
            console.log("User registered successfully");
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "Register new user failed: " +  textStatus);
        });
        
    }
