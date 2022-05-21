const { Schema, model } =  require('mongoose');

const contratoSchema =  Schema({
    idContrato: {
        type: String,
        required: [true, 'Por favor, ingrese el ID de la tarea'],
        unique: true
    },
    idUsuario: {
        type: String,
        required: [true, 'Por favor, ingrese el ID de la tarea'],
        unique: true
    },
    idTarea: {
        type: String,
        required: [true, 'Por favor, ingrese el ID de la tarea'],
        unique: true
    },
    idUsuario: {
        type: String,
        required: [true, 'Por favor, ingrese el ID del usuario'],
        unique: true
    },
    fechaContrato: {
        type:Date,
        require: [true, 'Por favor, ingrese la fecha de entrega de la tarea']
    },
    calificacionTarea: {
        type:Number,
        default: 0,
        require: [true, 'Por favor, ingrese el valor a pagar por la tarea']
    }
})

module.exports = model('Contratos', contratoSchema);