const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const ask = require("./ask");
const fetch = require("node-fetch");

let sesionIniciada = false;
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
      console.log(
        chalk.blue(`Bienvenido ${data.nombreUsuario} ${data.apellidoUsuario}`)
      );
        opcionesUsuario();
    } else {
      clear();
      console.log(chalk.red(data));
      iniciar();
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
      registrarse();
    }
  }
  async function opcionesUsuario() {
     
    const opcion= await ask.askMenuUsuario();
        
  }
}
module.exports = {
  run
};
