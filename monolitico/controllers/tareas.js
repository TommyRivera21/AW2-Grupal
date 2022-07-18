//Tommy Rivera
//Funcion de las tareas 

const { response } = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { mongo } = require('mongoose');
const { Tarea } = require('../models');


//Funcion para crear una nueva tarea
const nuevaTarea = async (req, res) => {
    const { body } = req;
    const cuerpo = {
        idUsuario: mongo.ObjectId(body.idUsuario),
        nombreTarea: body.nombreTarea,
        descripcionTarea:body.descripcionTarea ,
        fechatarea: new Date(body.fechatarea),
        precioTarea:body.precioTarea,
    }
    const tarea = new Tarea(cuerpo);
    const tareaNueva = await tarea.save();
    return res.status(201).json(tareaNueva);
};

//Funcion para consultar todas las tareas
const consultarTareas = async (req, res) => {
    const tarea = await Tarea.find();
    res.json(tarea);
};

//Funcion de consultar una tarea por Id
const consultarTareasID = async (req, res) => {
    const { idT } = req.params;
    const tarea = await Tarea.findById(idT);
    res.json(tarea);
};

//Funcion de Tareas generales aceptadas
const consultarTareasAceptadas = async (req, res) => {
    const task = await Tarea.find({ estadoTarea: true })
    return res.json(task);
};
//Funcion para consultar todas las tareas de un usuario
const consultarTareasUsuario = async (req, res) => {
    const { idU } = req.params;
    const task = await Tarea.find({ idUsuario: idU })

    if (!task) {
        return res.status(401).json('Tarea no encontrada')
    }
    return res.status(201).json(task)

};
//Funcion de Tareas Aceptadas de un usuario
const consultarTareasAceptadasUsuario = async (req, res) => {
    const { idU } = req.params;
    const task = await Tarea.find({ idUsuario: idU })
    return res.status(201).json(task);
};

const actualizarTarea = async (req, res) => {
    const { idU } = req.params;
    const { ...body } = req.body;
    const tareaModificada = await Tarea.findByIdAndUpdate(idU, body);
    res.json(tareaModificada);
};

const borrarTarea = async (req, res) => {
    const { idU } = req.params;
    const tareaEliminada = await Tarea.findByIdAndDelete(idU);
    res.json(tareaEliminada);
};

module.exports = {
    nuevaTarea,
    consultarTareas,
    consultarTareasID,
    consultarTareasAceptadas,
    consultarTareasUsuario,
    consultarTareasAceptadasUsuario,
    actualizarTarea,
    borrarTarea,
};