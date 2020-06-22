const {Schema, model } = require('mongoose');

const Trabajador = new Schema({


    nombre:{
        type:String,
        require: true
    },

    apellido:{
        type:String,
        require: true
    },
    horas:{
        type:Number,
        require:true
    },
    departamento:{
        type: Schema.Types.ObjectId,
        ref:'Departamento'
    }

});

module.exports = model('Trabajador',Trabajador);