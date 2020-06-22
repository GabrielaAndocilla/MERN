const mongoose = require('mongoose');

const URI= process.env.mongo_path ;

mongoose.connect(URI, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('Mongo esta conectado');
});