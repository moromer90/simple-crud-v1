var nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');


var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        
        xoauth2: xoauth2.createXOAuth2Generator({
                user:"jdavid.conesa@ikasle.aeg.es",
                clientId:"953592784627-pekpf99f62lnkpjc5nkbnrvdq1260h80.apps.googleusercontent.com",
                clientSecret:"UTOTU5ITvsvyVpBxa9VQDuZp",
                refreshToken:"1/CPJUoIuyWkJdOtDouctJwZGyjsB-w-C76IaBgD6Fv40"
            }
        )
    }     
});

exports.emailSender= function (req,res) {
    console.log("emailSender");
    
    
    console.log(req.body.to);
//    console.log("xoauth: " +JSON.stringify(auth));
    var mailOptions={
        from:"jdavid.conesa@ikasle.aeg.es",
        to : req.body.to,
        subject : req.body.subject,
        text : req.body.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
        smtpTransport.close();
    });

}