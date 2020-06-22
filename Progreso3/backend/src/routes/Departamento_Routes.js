const {Router} = require('express');

const router = Router();

const{ getDepartamento, crearDepartamento, getByName, Actualizar  } = require('../controllers/Departamento_Controller');


router.route('/')
    .get(getDepartamento)
    .post(crearDepartamento)

router.route('/:id')
    .put(Actualizar)

router.route('/:Name')
    .get(getByName)

module.exports= router;