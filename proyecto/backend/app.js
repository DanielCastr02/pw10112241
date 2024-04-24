let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors()); //el cors sirve para aceptar solicitudes de un servidor que no es el nuestro

//Rutas de acceso
app.get('/', function(req,res){
    res.send('Rutaaaaaa de iniciosssss');

});


//Encender el servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor Conectado a puerto:' + puerto);
});