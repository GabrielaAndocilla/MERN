const {Router} = require('express');

const router = Router();

const{ getTrabajador, crearTrabajador,Actualizar} = require('../controllers/Trabajador_Controller');


router.route('/')
    .get(getTrabajador)
    
router.route('/:id')
    .post(crearTrabajador)


router.route('/:idD/:id')
    .put(Actualizar)


module.exports= router;