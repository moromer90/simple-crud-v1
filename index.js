'use-strict'

require('dotenv').config({path: './config/config.env'})
const express = require('express');
const mongoose =  require ('mongoose');

const bodyparser =  require ('body-parser');
const routers = require('./routers');
var {ObjectID} = require ('mongodb');
const hbs = require('hbs');
const mongodbRoute = process.env.MONGODBROUTE; //MONGODBLOCAL || MONGODBROUTE


const app = express();
const port = process.env.PORT;

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());
app.use(routers);
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

/*MONGODB*/

mongoose.Promise = global.Promise
mongoose.connect(mongodbRoute, (err) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    app.listen(port, () => {
        console.log(`Servidor up en ${port}`);
    });
    console.log(`Conexión con Mongo correcta.`)
})