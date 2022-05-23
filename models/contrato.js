const { Schema, model } =  require('mongoose');

const contratoSchema =  Schema({
    idUsuario: {
        type: Mongoose.Types.ObjectId,
        required: [true, 'Por favor, ingrese el ID del usuario'],
        unique: true
    },
    idTarea: {
        type: Mongoose.Types.ObjectId,
        required: [true, 'Por favor, ingrese el ID del contrato'],
        unique: true
    },
    fechaContrato: {
        type:Date,
        require: [true, 'Por favor, ingrese la fecha del contrato']
    },
    calificacionTarea: {
        type:Number,
        default: 0,
    }
})

module.exports = model('Contratos', contratoSchema);