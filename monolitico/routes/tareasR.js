//tommy
const { Router } = require('express');

const router = Router();

const {
    nuevaTarea,
    consultarTareasAceptadas,
    consultarTareasUsuario,
    consultarTareasAceptadasUsuario,
    consultarUnaTarea
} = require('../controllers').Tareas;

const { validacionTareas } = require('../middlewares');

//ruta de consulta para crear tareas
router.post('/nuevatarea', nuevaTarea)

//ruta de consula de una tarea
router.get('/tarea/:idT', consultarUnaTarea);

//ruta de todas las tareas generales aceptadas 
router.get('/tareasaceptadas', consultarTareasAceptadas)

//ruta para consultar todas las tareas de un usuario
router.get('/tarea/:idU', validacionTareas, consultarTareasUsuario)

//ruta de todas las tareas aceptadas de el usuario
router.get('/tarea/:idU', validacionTareas, consultarTareasAceptadasUsuario);



module.exports = router;