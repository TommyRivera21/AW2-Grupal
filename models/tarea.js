const { Schema, model } =  require('mongoose');

const tareaSchema =  Schema({
    idUsuario: {
        type: Mongoose.Types.ObjectId,
        required: [true, 'Por favor, ingrese el ID del usuario'],
        unique: true
    },
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
        type:Date,
        require: [true, 'Por favor, ingrese la fecha de entrega de la tarea']
    },
    estadoTarea: {
        type: Boolean,
        default: true,
        require: true
    },
    precioTarea: {
        type:Number,
        default: 0,
        require: [true, 'Por favor, ingrese el valor a pagar por la tarea']
    }
})

module.exports = model('Tarea', tareaSchema);