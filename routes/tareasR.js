//tommy
const { Router } = require('express');

const router = Router();

const { consultarTareasAceptadas } = require('../controllers').Tareas;

const {validacionTareas} = require('../middlewares');

router.get('/:idU',validacionTareas, consultarTareasAceptadas)

module.exports = router;