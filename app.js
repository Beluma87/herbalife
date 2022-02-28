
const e = require('express');
const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000;

//CONEXION BD
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.p3kbe.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

//'mongodb://localhost:27017/test'
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de Datos Conectada'))
    .catch( e => console.log('ERORRRRRR BD NOT CONECT => ',e) )

//motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//RUTAS WEB
app.use('/',require('./router/rutas'));
app.use('/mascotas',require('./router/mascotas')); 

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "TITLE SITIO WEB"
    })
}) 


app.listen(port, () => {
  console.log('Mi respuesta desde express', port)
})


/*const http = require('http');
const server = http.createServer((req,res) => {
    res.end('estoy respondiendo a tu solicitud VVVVV')
})

const puerto = 3000;
server.listen(puerto, () => {
    console.log('escuchan2 solicitudes')
})*/