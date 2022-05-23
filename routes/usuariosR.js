const { Router } = require("express");
const { check } = require("express-validator");

const { crearUsuario, login } = require("../controllers").Usuario;

const {
  validacionCampos,
  verifyLogin,
  verifyRegister,
} = require("../middlewares");

const router = Router();

router.post("", verifyRegister, crearUsuario);
router.post("/login", verifyLogin, login);

/* router.get('/', obtenerUsuarios );
router.get('/:id' , check('id','El id no es valido').isMongoId()
, validacionCampos  , obtenerUsuario );
router.post('/', check('nombre','El nombre es requerido').not().isEmpty() 
, validacionCampos ,crearUsuario); */

module.exports = router;
