const { Schema, model } = require('mongoose');

const tareaSchema = Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, 'Por favor, ingrese el ID del usuario'],
    }
    ,
    nombreTarea: {
        type: String,
    },
    descripcionTarea: {
        type: String,
    },
    fechaTarea: {
        type: Date,
    },
    estadoTarea: {
        type: Boolean,
        default: true,
    },
    precioTarea: {
        type: Number,
    }
})

module.exports = model('Tarea', tareaSchema);