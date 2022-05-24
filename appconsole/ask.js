const inquirer = require("inquirer");
const { regex } = require("../libs/index");
const moment = require("moment");

const askMenu = () => {
  const questions = [
    {
      name: "menu",
      type: "list",
      message: "Qué desea realizar?",
      choices: ["Iniciar Sesión", "Registrarse"],
    },
  ];

  return inquirer.prompt(questions);
}
const askLogin = () => {
  const questions = [
    {
      name: "usuario",
      type: "input",
      message: "Ingrese su usuario:",
      validate: function (value) {
        if (value === "") {
          return "ingrese el usuario por favor";
        } else {
          return true;
        }
      },
    },
    {
      name: "contrasenaUsuario",
      type: "password",
      message: "Ingrese su contraseña:",
      mask: "*",
      validate: function (value) {
        if (value === "") {
          return "Ingrese su contraseña).";
        } else {
          return true;
        }
      },
    },
  ];
  return inquirer.prompt(questions);
}

const askRegister = () => {
  const questions = [
    {
      name: "nombreUsuario",
      type: "input",
      message: "Ingrese su nombre:",
      validate: function (value) {
        if (value === "" || regex.number.test(value)) {
          return "El nombre no debe contener números, por favor ingrese un nombre válido.";
        } else {
          return true;
        }
      },
    },

    {
      name: "apellidoUsuario",
      type: "input",
      message: "Ingrese su apellido:",
      validate: function (value) {
        if (value === "" || regex.number.test(value)) {
          return "El apellido no debe contener números, por favor ingrese un apellido válido.";
        } else {
          return true;
        }
      },
    },

    {
      name: "usuario",
      type: "input",
      message: "Ingrese un nombre de usuario:",
      validate: function (value) {
        if (value === "" || regex.spaces.test(value)) {
          return "El nombre de usuario no debe contener espacios en blancos, por favor pruebe otro.";
        } else {
          return true;
        }
      },
    },

    {
      name: "contrasenaUsuario",
      type: "password",
      message: "Ingrese una contraseña:",
      mask: "*",
      validate: function (value) {
        if (value === "") {
          return "Por favor ingrese una contraseña válida.";
        } else {
          return true;
        }
      },
    },

    {
      name: "cursoUsuario",
      type: "input",
      message: "Ingrese su curso:",
      validate: function (value) {
        if (value === "" || regex.number.test(value)) {
          return "Por favor ingrese solo letras.";
        } else {
          return true;
        }
      },
    },

    {
      name: "carreraUsuario",
      type: "input",
      message: "Ingrese su carrera:",
      validate: function (value) {
        if (value === "" || regex.number.test(value)) {
          return "Por favor ingrese solo letras.";
        } else {
          return true;
        }
      },
    },

    {
      name: "emailUsuario",
      type: "input",
      message: "Ingrese su correo electrónico:",
      validate: function (value) {
        if (value === "" || !regex.email.test(value)) {
          return "Por favor ingrese un correo electrónico válido.";
        } else {
          return true;
        }
      },
    },

    {
      name: "fechaUsuario",
      type: "input",
      message: "Ingrese su fecha de nacimiento en formato (YYYY-MM-DD):",
      validate: function (value) {
        if (value === "" || !moment(value, "YYYY-MM-DD", true).isValid()) {
          return "Por favor ingrese una fecha válida.";
        } else {
          return true;
        }
      },
    },
  ];

  return inquirer.prompt(questions);
}


const askMenuUsuario = () => {
  const questions = [
    {
      name: "opciones",
      type: "list",
      message: "opciones",
      choices: ["Ver tareas publicadas", "Ver mis Tareas", "Publicar tarea", "Ver mis contratos", "Cerrar sesion"],
    },
  ];

  return inquirer.prompt(questions);
}

const volver = () => {
  return inquirer.prompt({
    name: "menu",
    type: "list",
    menssage: "Opciones",
    choices: ["Volver"]
  });
}

const elegirTareaParaHacer = (num) => {
  listaTareas = []
  for (let i = 1; i <= num; i++) {
    listaTareas.push("Tarea " + i);

  }
  listaTareas.push("Volver");
  return inquirer.prompt({
    name: "opciones",
    type: "list",
    menssage: "Que tarea desea realizar?",
    choices: listaTareas
  });
}
const confirmarTarea = (num) => {
  return inquirer.prompt({
    name: "opcion",
    type: "list",
    message: `Estas seguro de realizar la ${num}`,
    choices: ["Si", "No"]
  })
}
module.exports = {
  askLogin, askRegister, askMenu, askMenuUsuario, volver, elegirTareaParaHacer, confirmarTarea
};
