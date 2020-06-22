const express=require('express'); 
const cors = require('cors');
const app = express();

// Configuraciones del servidor

app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use('/trabajador', require('./routes/Trabajador_Routes'));
app.use('/departamento', require('./routes/Departamento_Routes'));


module.exports=app; 