const { validationResult, body } = require("express-validator");
const { regex } = require("../libs/index");
const moment = require("moment");

const validacionCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

const verifyRegister = async (req, res, next) => {
  const { body } = req;

  if (body.nombreUsuario === "" || regex.number.test(body.nombreUsuario)) {
    return res
      .status(404)
      .json("El nombre no debe contener números, solo letras.");
  }

  if (body.apellidoUsuario === "" || regex.number.test(body.apellidoUsuario)) {
    return res
      .status(404)
      .json("El apellido no debe contener números, solo letras.");
  }

  if (body.usuario === "" || regex.spaces.test(body.usuario)) {
    return res
      .status(404)
      .json("El nombre de usuario no debe contener espacios en blancos.");
  }

  if (
    body.contrasenaUsuario === ""
  ) {
    return res
      .status(404)
      .json(
        "La contraseña debe cumplir los párametro de seguridad."
      );
  }

  if (body.cursoUsuario === "" || regex.number.test(body.cursoUsuario)) {
    return res.status(404).json("El curso debe ingresarse solo en letras.");
  }

  if (body.carreraUsuario === "" || regex.number.test(body.carreraUsuario)) {
    return res
      .status(404)
      .json("La carrera no debe contener números, solo letras");
  }

  if (body.emailUsuario === "" || !regex.email.test(body.emailUsuario)) {
    return res
      .status(404)
      .json("Debe ingresar un correo electrónico que sea válido.");
  }

  if (
    body.fechaUsuario === "" ||
    !moment(body.fechaUsuario, "YYYY-MM-DD", true).isValid()
  ) {
    return res
      .status(404)
      .json("Por favor ingrese una fecha válida en formato (YYYY-MM-DD)");
  }

  next();
};

const verifyLogin = async (req, res, next) => {
  const { body } = req;

  if (body.usuario === "" ) {
    return res
      .status(404)
      .json("ingrese un usuario valido.");
  }

  if (
    body.contrasenaUsuario === "")
   {
    return res
      .status(404)
      .json(
        "La contraseña debe ser válida. (8-15 caracteres, que incluya mayúscula, minuscula, número, carácter especial y sin espacios en blanco)"
      );
  }

  next();
};

module.exports = {
  validacionCampos,
  verifyLogin,
  verifyRegister,
};
