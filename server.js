const express = require('express');
const app = express();
var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
  
// Sincroniza sin borrar datos existentes
db.sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
}).catch((err) => {
  console.log('Error al sincronizar BD:', err.message);
}); 

let router = require('./app/routers/router.js');
const cors = require('cors')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', router);
app.get("/",(req,res) => {
  res.json({mesage:"Bienvenido Estudiantes de UMG"});
})

// Create a Server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, '0.0.0.0', function () {
  let host = server.address().address
  let port = server.address().port
  console.log("App listening at http://%s:%s", host, port); 
})