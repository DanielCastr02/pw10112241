const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors()); //el cors sirve para aceptar solicitudes de un servidor que no es el nuestro

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
})

// Nos conectamos a MySQL
conexion.connect((error) => {
    if (error) {
        throw error;
    } else { 
        console.log('Conectado a la base de datos');
    }
});

//Rutas de acceso
app.get('/', (req, res) => { 
    res.send('Rutaaaaaa de iniciosssss');
});   

app.get('/api/clientes', (req, res) => {
    conexion.query("SELECT * FROM clientes", (error, resultados) => {
        if (error) {
            return res.send(error)
        }
        return res.send(resultados)
    })
})

app.get('/api/clientes/:id', (req, res) => {
    const { id } = req.params
    conexion.query("SELECT * FROM clientes WHERE id = ?", [id], (error, resultados) => {
        if (error) {
            return res.send(error)
        }

        if (resultados.length > 0) {
            return res.send(resultados[0])
        } 
            
        return res.send({
            error: "Cliente no encontrado"
        })
    })
})

//Encender el servidor
let puerto = 3000;
app.listen(puerto, () => {
    console.log('Servidor Conectado a puerto:' + puerto);
});