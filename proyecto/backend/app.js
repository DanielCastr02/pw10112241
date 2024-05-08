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
app.get('/', (_, res) => {
    res.send('Rutaaaaaa de iniciosssss');
});

app.get('/api/clientes', (_, res) => {
    conexion.query("SELECT * FROM clientes", (error, resultados) => {
        if (error) {
            return res.send(error)
        }
        return res.send(resultados)
    })
})

//seleccionamos un cliente  en especifico
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

//borrar un cliente
app.delete('/api/clientes/:id', (req, res) => {
    const { id } = req.params
    conexion.query('DELETE FROM clientes WHERE id = ?', [id], (error, resultados) => {
        if (error) {
            return res.send(error)
        } else {
            res.send(resultados)
        }
    })
});

app.post('/api/clientes', (req, res) => {
    const cliente = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        rfc: req.body.rfc,
        curp: req.body.curp,
        cp: req.body.cp,
    }
    conexion.query('INSERT INTO clientes SET ?', cliente, (error, resultados) => {
        if (error) {
            return res.send(error)
        } else {
            res.send(resultados)
        }
    })
});

app.put('/api/clientes/:id', (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    const rfc = req.body.rfc;
    const curp = req.body.curp;
    const cp = req.body.cp;
    const sql = "UPDATE clientes SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, rfc = ?, curp = ?, cp = ? WHERE id = ?";
    conexion.query(sql, [nombre, apellido, direccion, telefono, rfc, curp, cp, id], (error, resultados) => {
        if (error) {
            return res.send(error)
        } else {
            res.send(resultados)
        }
    })
});

//Encender el servidor
let puerto = 3000;
app.listen(puerto, () => {
    console.log('Servidor Conectado a puerto:' + puerto);
});