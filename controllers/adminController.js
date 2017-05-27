exports.getAdminView = function(req,res){
    res.render('../views/admin.hbs',{
    pageTitle:"Admin"
//    content:"Contenido de la página"
    });
        
}