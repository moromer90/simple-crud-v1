'use strict'
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');


exports.sendEmail = function (req,res){
    var generator = xoauth2.createXOAuth2Generator({
        user: "jdavid.conesa@ikasle.aeg.es",
        clientId: "632565678267-f00c4dnm7tclm33eh5be9ctc615rn3d6.apps.googleusercontent.com",
        clientSecret: "7VNjDeAdFS4DzCgrywyQ_Vcn",
        refreshToken: "1/4v_OkTcR-zv8oZSfXc838HYiIHxAnq2oskJMukgiCA8",
    });
    console.log(JSON.stringify(generator));
    generator.on('token', function(token){
        console.log(token);
        console.log(`AccessToken: ${token.accessToken}`);
    });
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            xoauth2: generator
        }
    });
    //Test Nodemailer
    transporter.verify(function(error, success) {
        if (error) {
            console.log(`Verificar error: ${error}`);
        } else {
            console.log('Server up y listo para enviar mensajes');
        }
    });
    var mailOptions = {
        from:"jdavid.conesa@ikasle.aeg.es",
        to : req.body.to,
        subject : req.body.subject,
        text : req.body.text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(`Error en el envío de email: ${error}`);
        }else{
            console.log('Mensaje correctamente enviado: ' + info.response);
        };
    });
}