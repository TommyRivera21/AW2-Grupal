const mongoose = require('mongoose');
const conexion = "mongodb+srv://Valentinpico:QweQwe23@cluster0.bdqze.mongodb.net/servicioTareas?retryWrites=true&w=majority";
(async () => {
    //conectamos a la bd
    const conectado = await mongoose.connect(conexion);
    //Definir los models
    const Usuario = mongoose.model("Usuario",
        {
            nombreUsuario: String,
            apellidoUsuario: String,
            usuario: String,
            contrasenaUsuario: String,
            cursoUsuario: String,
            carreraUsuario: String,
            emailUsuario: String,
            fechaUsuario: Date,
        });
    // const Tarea = mongoose.model("Tarea", {
    //     idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    //     nombreTarea: String,
    //     descripcionTarea: String,
    //     fechaTarea: Date,
    //     estadoTarea: Boolean,
    //     precioTarea: Number

    // });
    //instancia de Usuario
    // const usuario1 = new Usuario(
    //     {
    //         nombreUsuario: "Valentin",
    //         apellidoUsuario: "Pico",
    //         usuario: "peko",
    //         contrasenaUsuario: "1234",
    //         cursoUsuario: "7mo B",
    //         carreraUsuario: "TI",
    //         emailUsuario: "kwnigpico@gmail.com",
    //         fechaUsuario: new Date(2000, 1, 13),
    //     });
    // const usuario2 = new Usuario(
    //     {
    //         nombreUsuario: "John",
    //         apellidoUsuario: "Connor",
    //         usuario: "SkyNet",
    //         contrasenaUsuario: "3022",
    //         cursoUsuario: "6mo A",
    //         carreraUsuario: "TI",
    //         emailUsuario: "terminator@gmail.com",
    //         fechaUsuario: new Date(2012, 6, 19),
    //     });
    // const usuario3 = new Usuario(
    //     {
    //         nombreUsuario: "Freddie",
    //         apellidoUsuario: "Mercury",
    //         usuario: "Queen314",
    //         contrasenaUsuario: "1970",
    //         cursoUsuario: "7mo A",
    //         carreraUsuario: "Artes",
    //         emailUsuario: "killerqueen@gmail.com",
    //         fechaUsuario: new Date(1998, 5, 20),
    //     });
    // const usuario4 = new Usuario(
    //     {
    //         nombreUsuario: "Perez",
    //         apellidoUsuario: "Jefferson",
    //         usuario: "jperez",
    //         contrasenaUsuario: "marathon",
    //         cursoUsuario: "5mo B",
    //         carreraUsuario: "Educación fisica",
    //         emailUsuario: "ecuador_run@gmail.com",
    //         fechaUsuario: new Date(2001, 8, 10),
    //     });
    // const usuario5 = new Usuario(
    //     {
    //         nombreUsuario: "Diego",
    //         apellidoUsuario: "Brando",
    //         usuario: "TheWorld",
    //         contrasenaUsuario: "wryy",
    //         cursoUsuario: "8mo B",
    //         carreraUsuario: "Leyes",
    //         emailUsuario: "scarymonsters@gmail.com",
    //         fechaUsuario: new Date(2001, 6, 29),
    //     });
    // const usuario6 = new Usuario(
    //     {
    //         nombreUsuario: "John",
    //         apellidoUsuario: "Rambo",
    //         usuario: "Ratatata",
    //         contrasenaUsuario: "M60",
    //         cursoUsuario: "2mo A",
    //         carreraUsuario: "Mecanica Naval",
    //         emailUsuario: "bomba@gmail.com",
    //         fechaUsuario: new Date(2000, 2, 3),
    //     });
    // const usuario7 = new Usuario(
    //     {
    //         nombreUsuario: "Arthur",
    //         apellidoUsuario: "Morgan",
    //         usuario: "BlackLungs",
    //         contrasenaUsuario: "rdr2",
    //         cursoUsuario: "10mo B",
    //         carreraUsuario: "TI",
    //         emailUsuario: "redemption2@gmail.com",
    //         fechaUsuario: new Date(1999, 3, 6),
    //     });
    // const usuario8 = new Usuario(
    //     {
    //         nombreUsuario: "Barry",
    //         apellidoUsuario: "Allen",
    //         usuario: "Flashpoint",
    //         contrasenaUsuario: "speed",
    //         cursoUsuario: "8mo B",
    //         carreraUsuario: "Educacion Fisica",
    //         emailUsuario: "redrunner@gmail.com",
    //         fechaUsuario: new Date(1997, 6, 12),
    //     });
    // const usuario9 = new Usuario(
    //     {
    //         nombreUsuario: "Steven",
    //         apellidoUsuario: "Rogelio",
    //         usuario: "ElCap",
    //         contrasenaUsuario: "Latam",
    //         cursoUsuario: "6mo B",
    //         carreraUsuario: "Educacion Fisica",
    //         emailUsuario: "avanager@gmail.com",
    //         fechaUsuario: new Date(1999, 1, 12),
    //     });
    // const usuario10 = new Usuario(
    //     {
    //         nombreUsuario: "Jackie",
    //         apellidoUsuario: "Chan",
    //         usuario: "fighter",
    //         contrasenaUsuario: "smoking",
    //         cursoUsuario: "4mo A",
    //         carreraUsuario: "Educacion Fisica",
    //         emailUsuario: "wata@gmail.com",
    //         fechaUsuario: new Date(1998, 1, 22),
    //     });
    // await usuario1.save();
    // await usuario2.save();
    // await usuario3.save();
    // await usuario4.save();
    // await usuario5.save();
    // await usuario6.save();
    // await usuario7.save();
    // await usuario8.save();
    // await usuario9.save();
    // await usuario10.save();
    // const tarea1 = new Tarea({
    //     idUsuario: usuarioAlmacenado._id,
    //     nombreTarea: "Tarea de bases de datos",
    //     descripcionTarea: "Realizar 3 entidades  y relacionarlas entre con el tema: Colegio",
    //     fechaTarea: new Date(2022, 4, 30),
    //     estadoTarea: true,
    //     precioTarea: 10
    // });
    //proocedemos almacenar usuario
    // const tareaAmacenada = await tarea1.save()
    // console.log(usuarioAlmacenado);
    // console.log(tareaAmacenada);
})()
