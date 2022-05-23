const { Schema, model } = require('mongoose');
const { Usuario } = require("./index");
const { Tarea } = require("./index");
const contratoSchema = Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, 'Por favor, ingrese el ID del usuario'],
    },
    idTarea: {
        type: Schema.Types.ObjectId,
        ref: "Tarea",
        required: [true, 'Por favor, ingrese el ID del contrato'],
        unique: true
    },
    fechaContrato: {
        type: Date,
        default:new Date(),
    },
    calificacionTarea: {
        type: Number,
        default: 0,
    }
})

module.exports = model('Contrato', contratoSchema);