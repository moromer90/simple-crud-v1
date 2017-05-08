'use-strict'
const express = require('express');
const mongoose =  require ('mongoose');
const bodyparser =  require ('body-parser');
const routers = require('./routers');
var {ObjectID} = require ('mongodb');
const hbs = require('hbs');
const mongodbRoute = 'mongodb://jose:jose@ds135820.mlab.com:35820/pruebanode';
const hbs = require('hbs');


const app = express();
const port = 3001;

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());
app.use(routers);
app.set('view engine', 'hbs');

app.set("view engine", 'hbs');

			app.get('/about', (req, res) => {
			res.render('about.hbs',{
				pageTitle:'Pagetite',
				content:'Contenido'
			});
			})
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