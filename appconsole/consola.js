const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const ask = require("./ask");
const fetch = require("node-fetch");

const run = async () => {
  clear();

  console.log(
    chalk.blue(figlet.textSync("Bienvenido!", { horizontalLayout: "full" }))
  );

  const option = await ask.askMenu();

  // LOGIN
  if (option.menu === "Iniciar Sesión") {
    console.log(
      chalk.green(
        figlet.textSync("Ingrese sus credenciales", {
          horizontalLayout: "default",
        })
      )
    );

    const user = await ask.askLogin();

    const res = await fetch(
      "http://localhost:2501/6toB/servicioTareas/api/usuarios/login",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();

    if (data.nombreUsuario) {
      console.log(
        chalk.blue(
          figlet.textSync(
            `Bienvenido ${data.nombreUsuario} ${data.apellidoUsuario}`,
            {
              horizontalLayout: "default",
              width: 100,
            }
          )
        )
      );
    } else {
      console.log(
        chalk.red(
          figlet.textSync(data, {
            horizontalLayout: "default",
            width: 100,
          })
        )
      );
    }
  }

  // REGISTER
  if (option.menu === "Registrarse") {
    console.log(
      chalk.green(
        figlet.textSync("Ingresa todos tus datos porfavor", {
          horizontalLayout: "default",
          width: 100,
        })
      )
    );
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
      console.log(
        chalk.yellow(
          figlet.textSync(`Registro Exitoso!`, {
            horizontalLayout: "default",
            width: 100,
          })
        )
      );
    } else {
      console.log(
        chalk.red(
          figlet.textSync(data, {
            horizontalLayout: "default",
            width: 100,
          })
        )
      );
    }
  }
}
module.exports = {
  run
};
