const { Schema, model, Mongoose } =  require('mongoose');

const usuarioSchema =  Schema({ 
    nombreUsuario: {
        type: String,
        required: [true, 'Por favor, ingrese el nombre del usuario'],
    },
    apellidoUsuario: {
        type: String,
        required: [true, 'Por favor, ingrese el apellido del usuario'],
    },
    usuario: {
        type: String,
        required: [true, 'Por favor, ingrese el nombre unico de usuario'],
        unique: true
    },
    contrasenaUsuario: {
        type: String,
        require: [true, 'Por favor ingrese la contraseña del usuario']
    },
    cursoUsuario: {
        type:String,
        require: [true, 'Por favor, ingrese el nivel que cursa el usuario']
    },
    carreraUsuario: {
        type:String,
        require: [true, 'Por favor, ingrese la carrera en la que estudia el usuario']
    },
    emailUsuario: {
        type:String,
        require: [true, 'Por favor, ingrese el correo del usuario']
    },
    fechaUsuario: {
        type:Date,
        require: [true, 'Por favor, ingrese la fecha de nacimiento del usuario']
    }
})

module.exports = model('Usuario', usuarioSchema);