var baseUrl = document.location.origin;
var data = sessionStorage.getItem('session');
if (!data){
	location.href = baseUrl;
}