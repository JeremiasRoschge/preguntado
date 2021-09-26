
//Def. de variables
const express = require("express");
const PORT = process.env.PORT || 3000;

const mysql = require('mysql');

const bp = require('body-parser');

const app = express();

//Bodyparser/Middlewares
app.use(bp.urlencoded({ extended: false}));
app.use(bp.json());

//EJS
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/views'));

//Router
app.use('/', require('./router/index.js'));
app.use('/salud', require('./router/salud.js'));
/*app.get('/informatica', require('./router/informatica.js'));*/

//Listener
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});