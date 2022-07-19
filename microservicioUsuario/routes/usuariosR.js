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

router.get('/:id', obtenerUsuario);

router.post('/', crearUsuario)

module.exports = router;