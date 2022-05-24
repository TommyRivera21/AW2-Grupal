//Tommy - Consulta de tareas de usuario
const { response } = require('express');
const { mongo } = require('mongoose');
const { Tarea } = require('../models');

const consultarTareas = async (req, res) => {
    const { idU } = req.params;
    

    const task = await Tarea.find({idUsuario:idU})

    if(!task){

        return res.status(401).json('Tarea no encontrada')
    }

    return res.status(201).json(task)

}


//Consulta de Tareas Aceptadas de un usuario

const consultarTareasAceptadasUsuario = async (req, res) => {
    const { idU } = req.params;

    const task = await Promise.all({idUsuario:idU, estadoTarea: true})

    res.json([task]);
}

//Consulta de Tareas Aceptadas generales



module.exports = {
    consultarTareas,
    consultarTareasAceptadasUsuario,
}