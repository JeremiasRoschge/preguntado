const express = require('express');
const router = express.Router()
const mysql = require('mysql')

//MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'jeremias',
    password: 'jeremias12',
    database: 'preguntados'
})
//CRUD
    //Get
exports.getRender = (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('Conectado a la id ' + connection.threadId);

        //Query
        connection.query('SELECT * FROM preguntas p INNER JOIN respuestas r ON r.id = p.respuestas_id WHERE p.id = "biologia"', (err, rows) => {
            //Si la conexion fue exitosa
            connection.release();

            if(!err) {
                res.render('salud.ejs', { quest: rows[0], answer: rows[0] });  
            } else { 
                console.log(err);

            }
        })
    })
}
    //POST
exports.getPost = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
    
      connection.query('SELECT * FROM preguntas WHERE id = "biologia"', (err, rows) => {
        connection.release();
        if (!err) {
          const pregunta = rows[0];
          const respuestaElegida = req.body.respuestaElegida;

          console.log(respuestaElegida)
       
          if (respuestaElegida == pregunta.respuesta_correcta) {
            res.send({ mensaje: 'CORRECTO'})
          } else {
            res.send({ mensaje: 'INCORRECTO'})
          } 

        } else {
            console.log(err)
        }
      });
    });
  }


