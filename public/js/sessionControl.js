var baseUrl = document.location.origin;
var data = sessionStorage.getItem('session');
var ses_id;
$(document).ready(function(){

if (!data){
	location.href = baseUrl;
	}

$("#logout").click(function() {
	ses_id="";
	sessionStorage.setItem('session', ses_id);
    location.href = baseUrl;
});

});