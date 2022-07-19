const { Router } = require("express");
const { check } = require("express-validator");

const {
  crearUsuario,
  obtenerUsuario,
  login,
  mostarUsuarios,
  actualizarUsuario,
  borrarUsuario,
} = require("../controllers").Usuario;

const { validacionCampos, verifyLogin } = require("../middlewares");

const router = Router();

router.get("/login/:usuario/:contrasena", verifyLogin, login);

router.get("/:id", obtenerUsuario);

router.post("/", crearUsuario);

router.get("/", mostarUsuarios);
router.delete("/:idU", borrarUsuario);
router.put("/:idU", actualizarUsuario);
module.exports = router;
