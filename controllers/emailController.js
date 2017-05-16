var nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');


exports.emailSender= function (req,res) {
    console.log("emailSender");
    
    var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        
        xoauth2: xoauth2.createXOAuth2Generator({
                user: "jdavid.conesa@ikasle.aeg.es",
                clientId:"203752607426-u342pc85lrj8mse6mmrtjmdpdokpv9sj.apps.googleusercontent.com",
                clientSecret:"x-v5nHVZywn57yfpsOD5_ksC",
                accessToken: "ya29.GltMBEy_hF1CDg2UALfCAwHhE_lHy7BfO2E1dEut-86WaEdALspYsRd0CNRsHBNyF-EdsIXCUdfIocApLd1suSKBRL5i50-cZXadfC_4kK-u6C-ZFs1GHP5iqwTq", 
                refreshToken: "1/NX91F0URfGxf795INtYx7J_abtXB9CnQfDpiMWH3zfQeohxy5FrD8GBWsnzYH25f"
            }
        )
        
    }
        
});
    console.log(req.body.to);
//    console.log("xoauth: " +JSON.stringify(auth));
    var mailOptions={
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