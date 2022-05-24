//tommy
const { Router } = require('express');

const router = Router();

//ruta del controlador para todas las tareas
const { consultarTareas } = require('../controllers').Tareas;

//ruta del controlador para las tareas aceptadas
const { consultarTareasAceptadasUsuario } = require('../controllers').Tareas;

const {validacionTareas} = require('../middlewares');

//ruta de todas las tarea
router.get('/:idU',validacionTareas, consultarTareas)

//ruta de todas las tareas aceptadas de el usuario
router.get('/:idU',validacionTareas, consultarTareasAceptadasUsuario)





module.exports = router;