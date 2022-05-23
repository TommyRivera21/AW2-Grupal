const inquirer = require("inquirer");
const { regex } = require("../libs/index");
const moment = require("moment");

module.exports = {
  askMenu: () => {
    const questions = [
      {
        name: "menu",
        type: "list",
        message: "Qué desea realizar?",
        choices: ["Iniciar Sesión", "Registrarse"],
      },
    ];

    return inquirer.prompt(questions);
  },

  askLogin: () => {
    const questions = [
      {
        name: "emailUsuario",
        type: "input",
        message: "Ingrese su correo electrónico:",
        validate: function (value) {
          if (value === "" || !regex.email.test(value)) {
            return "El correo electrónico que ingreso no es válido.";
          } else {
            return true;
          }
        },
      },

      {
        name: "contrasenaUsuario",
        type: "password",
        message: "Ingrese su contraseña:",
        validate: function (value) {
          if (value === "" || !regex.password.test(value)) {
            return "Ingrese su contraseña que debe cumplir => (8-15 caracteres, que incluya mayúscula, minuscula, número, carácter especial y sin espacios en blanco).";
          } else {
            return true;
          }
        },
      },
    ];

    return inquirer.prompt(questions);
  },

  askRegister: () => {
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
        validate: function (value) {
          if (value === "" || !regex.password.test(value)) {
            return "Por favor ingrese una contraseña válida. (8-15 caracteres, que incluya mayúscula, minuscula, número, carácter especial y sin espacios en blanco)";
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
  },
};
