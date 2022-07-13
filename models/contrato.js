const { Schema, model } = require('mongoose');
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