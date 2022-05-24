//Tommy Rivera

//Funcion de las tareas 

const { response } = require('express');
const { mongo } = require('mongoose');
const { Tarea } = require('../models');


//Funcion para crear una nueva tarea

const nuevaTarea = async (req, res) => {

    const body = req.body;
    const existeUsuario = await Usuario.findOne({ usuario: body.usuario });
    if (existeUsuario) {
        return res.status(400).json(`${existeUsuario.usuario} ya se encuentra registrado`);
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

}


//Funcion de Tareas Aceptadas generales

const consultarTareasAceptadas = async (req, res) => {
    
    const task = await Tarea.find ({estadoTarea: true})

    return res.json(task);
}

//Funcion para consultar todas las tareas de un usuario
const consultarTareasUsuario = async (req, res) => {
    const { idU } = req.params;
    

    const task = await Tarea.find({idUsuario:idU})

    if(!task){

        return res.status(401).json('Tarea no encontrada')
    }

    return res.status(201).json(task)

}


//Funcion de Tareas Aceptadas de un usuario

const consultarTareasAceptadasUsuario = async (req, res) => {
    const { idU } = req.params;

    const task = await Promise.all({idUsuario:idU, estadoTarea: true})

    return res.status(201).json(task);
}


module.exports = {
    nuevaTarea,
    consultarTareasAceptadas,
    consultarTareasUsuario,
    consultarTareasAceptadasUsuario,
}