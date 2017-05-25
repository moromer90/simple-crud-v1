'use strict'
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
require('dotenv').config({path: './config/config.env'})

exports.sendEmail = function(email,id,type,baseUrl){
    
    var generator = xoauth2.createXOAuth2Generator({
        user: process.env.USER,
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        refreshToken: process.env.REFRESHTOKEN,
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
    
    let subject;
    let text;
    let url1=process.env.LOCALHOST;
    console.log(process.env.LOCALHOST);
    
    if(type == "register"){
        subject = "Activar Cuenta registrada";
        text="Para activar tu cuenta haz click en el link: <a href='"+url1+"/activeAccount/"+id+"'>activar aqui</a>";
    }else{
        subject = "Recuperar contraseña";
        text="Para recuperar la contraseña haz click en link: <a href='"+url1+"/modifyPass/"+id+"'>modificar password</a>";
    }
    
    var mailOptions = {
        from:"jdavid.conesa@ikasle.aeg.es",
        to : email,
        subject : subject,
        html : text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return res.status(400).send("Error: "+ error.message);
            console.log(`Error en el envío de email: ${error}`);
        }else{
            console.log('Mensaje correctamente enviado: ' + info.response);
        };
    });
}