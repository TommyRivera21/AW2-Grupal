const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearUsuario, obtenerUsuario
} = require('../controllers').Usuario;


const { validacionCampos } = require('../middlewares');

const router  = Router();

// router.get('/', obtenerUsuarios );
router.get('/:id' , check('id','El id no es valido').isMongoId(), 
validacionCampos  , obtenerUsuario );
// router.post('/', check('nombre','El nombre es requerido').not().isEmpty(), 
// validacionCampos ,crearUsuario); 

module.exports = router;