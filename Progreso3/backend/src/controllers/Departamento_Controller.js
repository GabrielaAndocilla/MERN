const Departamento ={};

const departamento = require('../models/Departamento_Model')

Departamento.getDepartamento = async (req,res)=>{
    const cate = await departamento.find();
    res.json(cate)
}

Departamento.crearDepartamento = async (req,res)=>{
    const {nombre,salario} = req.body;
    console.log(nombre)
     const newPais = new departamento ({
        nombre: nombre,
        salario:salario
    })
    await newPais.save();
    res.json({message:'Crear'})


}
Departamento.getByName = async (req,res)=>{
    const cate = await departamento.find({ nombre: req.params.Name});
    res.json(cate)
}

Departamento.Actualizar = async (req,res)=>{
    const {nombre,salario} = req.body;
    await departamento.findByIdAndUpdate(req.params.id,
     {
        nombre: nombre,
        salario: salario
    });

    res.json({message:'Actualizado'})

}





module.exports = Departamento;