//tommy
const { Router } = require('express');

const router = Router();

//ruta del controlador para crear una nueva tarea
const { nuevaTarea } = require('../controllers').Tareas;

//ruta del controlador para todas las tareas del usuario
const { consultarTareasUsuario } = require('../controllers').Tareas;

//ruta del controlador para las tareas aceptadas
const { consultarTareasAceptadas } = require('../controllers').Tareas;

//ruta del controlador para las tareas aceptadas
const { consultarTareasAceptadasUsuario } = require('../controllers').Tareas;



const {validacionTareas} = require('../middlewares');



//ruta de consulta para crear tareas
router.post('/nuevatarea', nuevaTarea)

//ruta de todas las tareas aceptadas de los usuarios
router.get('/tareasaceptadas', consultarTareasAceptadas)

//ruta para consultar todas las tareas de un usuario
router.get('/:idU',validacionTareas, consultarTareasUsuario)

//ruta de todas las tareas aceptadas de el usuario
router.get('/:idU',validacionTareas, consultarTareasAceptadasUsuario)






module.exports = router;