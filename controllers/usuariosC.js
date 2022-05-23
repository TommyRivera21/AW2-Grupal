//Modificar
const {  response } = require('express');
const { Usuario } = require('../models');

const obtenerUsuario = async (req,res= response)=>{
    const {id} =req.params
    const usuario =  await Usuario.findById(id);
    res.json(usuario);
}
const crearUsuario = async (req,res)=>{

    const body=req.body;
    const existeUsuario= await Usuario.findOne({usuario:body.usuario});
    if (existeUsuario)
    {
        return res.status(400).json({
            message:`${body.usuario} ya se encuentra registrado`
        })
    }
    const usuario = new Usuario(body);
    const usuarioNuevo= await usuario.save();
    return res.status(201).json(usuarioNuevo);

}

module.exports={
    obtenerUsuario,
    crearUsuario
}
