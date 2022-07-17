<template>
  <div class="container d-flex justify-content-center p-4">
    <form @submit.prevent class="bg-info bg-gradient pt-4 px-5 w-75">
      <h2 class="text-center mb-3">Regístrate</h2>
      <div class="row mb-3">
        <div class="col-4">
          <label for="name" class="form-label">Nombres:</label>
          <input
            type="text"
            autofocus
            placeholder="Ejm: Elian Felix"
            id="name"
            name="name"
            class="form-control"
            required
            v-model="name"
          />
        </div>

        <div class="col-4">
          <label for="lastName" class="form-label">Apellidos:</label>
          <input
            type="text"
            placeholder="Ejm: Macias Alvarado"
            id="lastName"
            name="lastName"
            class="form-control"
            required
            v-model="lastName"
          />
        </div>

        <div class="col-4">
          <label for="user" class="form-label">Usuario:</label>
          <input
            type="text"
            placeholder="Ejm: elian12"
            id="user"
            name="user"
            class="form-control"
            required
            v-model="user"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-4">
          <label for="course" class="form-label">Curso:</label>
          <input
            type="text"
            placeholder="Ejm: Sexto Nivel 'B'"
            id="course"
            name="course"
            class="form-control"
            required
            v-model="course"
          />
        </div>

        <div class="col-4">
          <label for="career" class="form-label">Carrera:</label>
          <input
            type="text"
            placeholder="Ejm: Ingeniería de Software"
            id="career"
            name="career"
            class="form-control"
            required
            v-model="career"
          />
        </div>

        <div class="col-4">
          <label for="date" class="form-label">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            class="form-control"
            required
            v-model="date"
          />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-4">
          <label for="email" class="form-label">Correo Electrónico:</label>
          <input
            type="email"
            placeholder="Ejm: ejemplo@ejemplo.com"
            id="email"
            name="email"
            class="form-control"
            required
            v-model="email"
          />
        </div>

        <div class="col-4">
          <label for="password" class="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            v-model="password"
          />
        </div>

        <div class="col-4">
          <label for="passwordConfirm" class="form-label"
            >Confirmar Contraseña:</label
          >
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            class="form-control"
            required
            v-model="passwordConfirm"
          />
        </div>
      </div>

      <div class="d-flex flex-column align-items-center">
        <button
          class="btn btn-dark mb-2 w-25"
          @click="
            register({
              name,
              lastName,
              user,
              course,
              career,
              date,
              email,
              password,
              passwordConfirm,
            })
          "
        >
          Regístrate
        </button>

        <p>
          ¿Ya tienes una cuenta?
          <nuxt-link to="/login" class="text-decoration-none text-light">
            Inicia Sesión</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import regex from "../static/regex.js";
import moment from "moment";
import axios from "axios";

interface User {
  name: string;
  lastName: string;
  user: string;
  course: string;
  career: string;
  date: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default Vue.extend({
  data() {
    return {
      name: "",
      lastName: "",
      user: "",
      course: "",
      career: "",
      date: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    async register(user: User) {
      let clearUser: User = this.clearRegister(user);

      if (this.validateRegister(clearUser)) {
        try {
          const res = await axios.post(`${this.$axios.defaults.baseURL}`, {
            nombreUsuario: clearUser.name,
            apellidoUsuario: clearUser.lastName,
            usuario: clearUser.user,
            contrasenaUsuario: clearUser.password,
            cursoUsuario: clearUser.course,
            carreraUsuario: clearUser.career,
            emailUsuario: clearUser.email,
            fechaUsuario: clearUser.date,
          });
          if (res.status === 201) {
            this.showAlert("Gracias por Registrarte");
            this.$router.push("/login");
          } else {
            this.showAlert(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },

    validateRegister(user: User): boolean {
      if (
        user.name === "" ||
        user.lastName === "" ||
        user.user === "" ||
        user.course === "" ||
        user.career === "" ||
        user.date === "" ||
        user.email === "" ||
        user.password === "" ||
        user.passwordConfirm === ""
      ) {
        this.showAlert("Llene todos los campos");
        return false;
      }

      if (regex.number.test(user.name)) {
        this.showAlert("El Nombre no puede tener números");
        return false;
      }

      if (regex.number.test(user.lastName)) {
        this.showAlert("El Apellido no puede tener números");
        return false;
      }

      if (regex.spaces.test(user.user)) {
        this.showAlert("El Usuario no puede tener espacios en blanco");
        return false;
      }

      if (regex.number.test(user.course)) {
        this.showAlert("El curso no puede tener números");
        return false;
      }

      if (regex.number.test(user.career)) {
        this.showAlert("La Carrera no puede tener números");
        return false;
      }

      if (!moment(user.date, "YYYY-MM-DD", true).isValid()) {
        this.showAlert("Formato de fecha incorrecta");
        return false;
      }

      if (!regex.email.test(user.email)) {
        this.showAlert("El email que ingreso no es un email válido");
        return false;
      }

      if (user.password.length < 8 || user.passwordConfirm.length < 8) {
        this.showAlert("La contraseña no puede ser menor de 8 dígitos");
        return false;
      }
      if (
        !regex.password.test(user.password) ||
        !regex.password.test(user.passwordConfirm)
      ) {
        this.showAlert(
          "La contraseña debe cumplir párametros de seguridad. (8-15 caracteres, que incluya mayúscula, minuscula, número, carácter especial y sin espacios en blanco)"
        );
        return false;
      }

      if (user.password !== user.passwordConfirm) {
        this.showAlert("Las contraseñas con coinciden");
        return false;
      }

      return true;
    },

    clearRegister(user: User): User {
      let userRegister: User = {
        name: user["name"].trim(),
        lastName: user["lastName"].trim(),
        user: user["user"].trim(),
        course: user["course"].trim(),
        career: user["career"].trim(),
        date: user["date"].trim(),
        email: user["email"].trim(),
        password: user["password"].trim(),
        passwordConfirm: user["passwordConfirm"].trim(),
      };

      return userRegister;
    },

    showAlert(value: string): void {
      alert(value);
    },
  },
});
</script>
