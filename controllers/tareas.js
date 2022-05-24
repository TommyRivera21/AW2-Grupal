//Tommy Rivera

//Funcion de las tareas 

const { response } = require('express');
const { mongo } = require('mongoose');
const { Tarea } = require('../models');


//Funcion para crear una nueva tarea

const nuevaTarea = async (req, res) => {

    const {body} = req;
    const tarea = new Tarea(body);
    const tareaNueva = await tarea.save();
    return res.status(201).json(tareaNueva);
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

    const task = await Tarea.find({idUsuario:idU})

    return res.status(201).json(task);

}


module.exports = {
    nuevaTarea,
    consultarTareasAceptadas,
    consultarTareasUsuario,
    consultarTareasAceptadasUsuario,
}