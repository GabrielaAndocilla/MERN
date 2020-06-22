const {Schema, model } = require('mongoose');

const Departamento = new Schema({


    nombre:{
        type:String,
        require: true,
        unique:true

    },
    salario:{
        type:Number,
        require:true
    }


});

module.exports = model('Departamento',Departamento);