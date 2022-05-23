//Tommy - Consulta de tareas
const { response } = require('express');
const { mongo } = require('mongoose');
const { Tarea } = require('../models');

const consultarTareasAceptadas = async (req, res) => {
    const { idU } = req.params;
    

    const task = await Tarea.find({idUsuario:idU})

    //Consulta las tareas por estado
    //const task = await Tarea.find({idUsuario:idU, estadoTarea: false})

    if(!task){

        return res.status(401).json('Tarea no encontrada')
    }

    return res.status(201).json(task)

}

module.exports = {
    consultarTareasAceptadas,
}