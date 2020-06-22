const Trabajador ={};

const trabajador = require('../models/Trabajador_Model');
const departamento=require('../models/Departamento_Model');

Trabajador.getTrabajador = async (req,res)=>{
    const cate = await trabajador.find().
    populate('departamento');
    res.json(cate)
}

Trabajador.crearTrabajador = async (req,res)=>{
    const {nombre,apellido,horas} = req.body;
    const local = await departamento.findById(req.params.id);
    const newProvincia = new trabajador ({
        nombre: nombre,
        apellido: apellido,
        horas:horas,
        departamento: local
        
    })
    await newProvincia.save();
    res.json({message:'Creado'})

}

Trabajador.Actualizar = async (req,res)=>{
    const {nombre,apellido,horas} = req.body;
    const local = await departamento.findById(req.params.idD);
    await trabajador.findByIdAndUpdate(req.params.id,
     {
        nombre: nombre,
        apellido: apellido,
        horas:horas,
        departamento: local
    });

    res.json({message:'Actualizado'})

}

module.exports = Trabajador;