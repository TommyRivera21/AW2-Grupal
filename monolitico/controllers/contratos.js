//valentin//Modificar
const { response } = require('express');
const { mongo } = require('mongoose');
const { Contrato } = require('../models');

const crearContrato = async (req, res) => {
    const { idU, idT } = req.params;
    req.body = {
        idUsuario: new mongo.ObjectId(idU),
        idTarea: new mongo.ObjectId(idT),
    }
    const contrato = new Contrato(req.body);
    try {
        const Contrato1 = await contrato.save();
        return res.status(201).json(Contrato1);
    } catch (error) {
        res.json({ error: error.message });
    }
}
const mostrarContratosPorIdUsuario = async (req, res) => {
    const{idU}=req.params;
    const contrato = await Contrato.find({idUsuario:idU});
    res.json(contrato);
}

module.exports = {
    crearContrato,
    mostrarContratosPorIdUsuario
}