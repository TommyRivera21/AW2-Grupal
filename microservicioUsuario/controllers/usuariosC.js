//Modificar
const { response } = require("express");
const { Usuario } = require("../models");

const obtenerUsuario = async (req, res = response) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  res.json(usuario);
};
const crearUsuario = async (req, res) => {
  const body = req.body;
  const existeUsuario = await Usuario.findOne({ usuario: body.usuario });
  if (existeUsuario) {
    return res
      .status(400)
      .json(`${existeUsuario.usuario} ya se encuentra registrado`);
  }
  const emailExist = await Usuario.findOne({ emailUsuario: body.emailUsuario });
  if (emailExist) {
    return res
      .status(404)
      .json(`El correo ${emailExist.emailUsuario} ya está registrado`);
  }
  const usuario = new Usuario(body);
  const usuarioNuevo = await usuario.save();
  return res.status(201).json(usuarioNuevo);
};
const login = async (req, res) => {
  const { usuario, contrasena } = req.params;
  const user = await Usuario.findOne({ usuario });

  if (!user) {
    return res.status(404).json(`usuario no existe`);
  } else if (user.contrasenaUsuario != contrasena) {
    return res.status(404).json(`constraseña incorrecta`);
  }
  return res.status(201).json(user);
};

const mostarUsuarios = async (req, res) => {
  const user = await Usuario.find();

  res.json(user);
};

const actualizarUsuario = async (req, res) => {
  const { idU } = req.params;
  const { ...body } = req.body;

  const usuarioModificado = await Usuario.findByIdAndUpdate(idU, body);
  res.json(usuarioModificado);
};
const borrarUsuario = async (req, res) => {
  const { idU } = req.params;
  const usuarioEliminado = await Usuario.findByIdAndDelete(idU);
  res.json(usuarioEliminado);
};

module.exports = {
  obtenerUsuario,
  crearUsuario,
  login,
  mostarUsuarios,
  actualizarUsuario,
  borrarUsuario,
};
