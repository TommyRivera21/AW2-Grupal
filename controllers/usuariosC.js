//Modificar
const { response } = require("express");
const { Usuario } = require("../models");

const obtenerUsuarios = async (req, res = response) => {
  const { limite = 10, desde = 0 } = req.query;
  const query = { estado: true };
  const [total, productos] = await Promise.all([
    Producto.countDocuments(),
    Producto.find(query).skip(desde).limit(limite),
  ]);
  res.json({
    total,
    productos,
  });
};
const obtenerUsuario = async (req, res = response) => {
  const { id } = req.params;
  const producto = await Producto.findById(id);
  res.json(producto);
};

const crearUsuario = async (req, res) => {
  const { body } = req;

  const emailExist = await Usuario.findOne({ emailUsuario: body.emailUsuario });

  if (emailExist) {
    return res
      .status(404)
      .json(`El correo ${emailExist.emailUsuario} ya está registrado`);
  }

  const userExist = await Usuario.findOne({ usuario: body.usuario });

  if (userExist) {
    return res
      .status(404)
      .json(
        `El usuario ${userExist.usuario} ya está registrado, intente con otro usuario`
      );
  }

  const user = new Usuario(body);
  const newUser = await user.save();
  return res.status(201).json(newUser);
};

const login = async (req, res) => {
  const { emailUsuario, contrasenaUsuario } = req.body;
  const user = await Usuario.findOne({ emailUsuario, contrasenaUsuario });

  if (!user) {
    return res.status(404).json(`Correo o contraseña incorrectos`);
  }

  return res.status(201).json(user);
};

//////////////////////////////////////////////////////////////////

module.exports = {
  crearUsuario,
  login,
};
