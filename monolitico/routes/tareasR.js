//tommy
const { Router } = require('express');

const router = Router();

const {
    nuevaTarea,
    consultarTareas,
    consultarTareasID,
    consultarTareasAceptadas,
    consultarTareasUsuario,
    consultarTareasAceptadasUsuario,
    actualizarTarea,
    borrarTarea
} = require('../controllers').Tareas;

const { validacionTareas, validacionCampos } = require('../middlewares');

//ruta de consulta para crear tareas
router.post("/nueva_tarea", validacionTareas, validacionCampos, nuevaTarea)

//ruta una tareas generales
router.get("/", consultarTareas);

//ruta de todas las tareas por su id
router.get('/:idT', validacionTareas, consultarTareasID)

//ruta tareas de un usuario
router.get('/tareas_usuario/:idU', validacionTareas, consultarTareasUsuario);

//ruta tareas aceptadas de un usuario
router.get('/tareas_aceptadas_usuario/:idU', validacionTareas,  consultarTareasAceptadasUsuario);

//ruta para actualizar una tarea de un usuario
router.put('/update_tarea/:idU', validacionTareas, actualizarTarea);

//ruta tareas aceptadas de un usuario
router.delete('/borrar_tarea/:idU', validacionTareas, borrarTarea);


module.exports = router;