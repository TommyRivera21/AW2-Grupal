const chalk = require("chalk");
const figlet = require("figlet");
const ask = require("./ask");
const fetch = require("node-fetch");
let idUsuario = "";
const run = async () => {
  clear();
  console.log(
    chalk.blue(figlet.textSync("Servicio de Tareas"))
  );
  const option = await ask.askMenu();
  // LOGIN
  if (option.menu === "Iniciar Sesión") {
    await iniciar();
  } else {
    await registrarse();
    await iniciar();
  }


}
async function iniciar() {
  console.log(chalk.green("Ingrese sus credenciales"));
  const user = await ask.askLogin();
  const res = await fetch(
    `http://localhost:2501/6toB/servicioTareas/api/usuarios/login/${user.usuario}/${user.contrasenaUsuario}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  if (data.nombreUsuario) {
    clear()
    console.log(chalk.blue(`Bienvenido ${data.nombreUsuario} ${data.apellidoUsuario}`));
    idUsuario = data._id
    await opcionesUsuario();
  } else {
    clear();
    console.log(chalk.red(data));
    await iniciar();
  }
}

async function registrarse() {

  console.log(chalk.green("Ingresa todos tus datos porfavor"));
  const user = await ask.askRegister();
  const res = await fetch(
    "http://localhost:2501/6toB/servicioTareas/api/usuarios",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await res.json();
  if (data.nombreUsuario) {
    console.log(chalk.yellow(`Registro Exitoso!`));
  } else {
    clear();
    console.log(chalk.red(data));
    await registrarse();
  }
}
async function opcionesUsuario() {
  const opcion = await ask.askMenuUsuario();
  switch (opcion.opciones) {
    case "Ver mis Tareas":
      await verMisTareas();
    case "Ver tareas publicadas":
      await verTodasLasTareas();
    case "Publicar tarea":
    //await publicarTarea();

    case "Ver mis contratos":
    //await verMisContratos();

    case "Cerrar sesion":
      await run();


    default:
      break;
  }
}

async function verMisTareas() {
  clear();
  const resa = await fetch(`http://localhost:2501/6toB/servicioTareas/api/tareas/${idUsuario}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  const data = await resa.json();
  let i = 0;
  data.forEach(e => {
    i += 1;
    console.log(`Tarea ${i}`);
    console.log('\tNombre: ' + e.nombreTarea);
    console.log('\tDescripcion: ' + e.descripcionTarea);
    console.log('\tEstado: ' + e.estadoTarea);
    console.log('\tPrecio:' + e.precioTarea + '\n');
  });
  await opcionesUsuario();
}
async function verTodasLasTareas() {
  clear();
  const resa = await fetch(`http://localhost:2501/6toB/servicioTareas/api/tareas/tareasAceptadas`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  const data = await resa.json();
  let i = 0;
  data.forEach(e => {
    i += 1;
    console.log(`Tarea ${i}`);
    console.log('\tNombre: ' + e.nombreTarea);
    console.log('\tDescripcion: ' + e.descripcionTarea);
    console.log('\tFecha entrega: ' + e.fechaTarea);
    console.log('\tPrecio:' + e.precioTarea + '\n');
  });
  const opcion = await ask.elegirTareaParaHacer(data.length);
  let idTarea;
  for (let i = 1; i <= data.length; i++) {
    if (opcion.opciones == `Tarea ${i}`) {
      idTarea = data[i - 1]._id;
      const siOno = await ask.confirmarTarea(opcion.opciones);
      if (siOno.opcion == "Si") {
        await crearContrato(idUsuario, idTarea);
      } else {
        clear();
        await opcionesUsuario();
      }
    }
    if (opcion.opciones == "Volver") {
      clear();
      await opcionesUsuario();
    }
  }
  clear();

}
async function publicarTarea() {
}
async function verMisContratos() {
}
async function crearContrato(usuario, tarea) {
  const resa = await fetch(`http://localhost:2501/6toB/servicioTareas/api/contratos/${usuario}/${tarea}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  const data = await resa.json();
  console.log("Contrato Generado con exito!!");
  await opcionesUsuario();
}
async function retroceder() {
  await ask.volver();
  await opcionesUsuario();
}

module.exports = {
  run
};
