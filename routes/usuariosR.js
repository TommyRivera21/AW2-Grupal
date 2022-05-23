const { Router }= require('express');
const { check} =  require('express-validator');

const {
    crearUsuario, obtenerUsuario   
} = require('../controllers').Usuario; 


const { validacionCampos } = require('../middlewares');

const router  = Router();

router.get('/:id' , check('id','El id no es valido').isMongoId(), 
validacionCampos  , obtenerUsuario );

router.post('/', crearUsuario) 
module.exports = router;
