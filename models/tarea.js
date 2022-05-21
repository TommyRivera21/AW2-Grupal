const { Schema, model } = require('mongoose');
const { Usuario } = require("./usuario");

const tareaSchema = Schema({
    idUsuario: {
        type: Schema.Types.ObjectId, 
        ref: "Usuario",
        required: [true, 'Por favor, ingrese el ID del usuario'],
    }
    ,
    nombreTarea: {
        type: String,
        required: [true, 'Por favor, ingrese el nombre de la tarea'],
    },
    descripcionTarea: {
        type: String,
        required: [true, 'Por favor, ingrese una descripcion de la tarea'],
        unique: true
    },
    fechaTarea: {
        type: Date,
        require: [true, 'Por favor, ingrese la fecha de entrega de la tarea']
    },
    estadoTarea: {
        type: Boolean,
        default: true,
    },
    precioTarea: {
        type: Number,
        require: [true, 'Por favor, ingrese el valor a pagar por la tarea']
    }
})

module.exports = model('Tarea', tareaSchema);