const { Router } = require("express");
const { check } = require("express-validator");


const {

  crearUsuario, obtenerUsuario, login
} = require('../controllers').Usuario;


const {
  validacionCampos,
  verifyLogin
} = require("../middlewares");

const router = Router();

router.get("/login/:usuario/:contrasena", verifyLogin, login);

// router.get('/', obtenerUsuarios );
router.get('/:id', obtenerUsuario);
// router.post('/', check('nombre','El nombre es requerido').not().isEmpty(), 
// validacionCampos ,crearUsuario); 


router.post('/', crearUsuario)

module.exports = router;
