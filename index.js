'use-strict'
const express = require('express');
const mongoose =  require ('mongoose');
const mongodbRoute = 'mongodb://jose:jose@ds135820.mlab.com:35820/pruebanode';

const app = express();
const port = 3001;


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