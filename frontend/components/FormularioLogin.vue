<template>
  <div class="container d-flex justify-content-center p-4">
    <form @submit.prevent class="bg-info bg-gradient pt-4 px-5 w-50">
      <h2 class="text-center mb-3">Inicia Sesión</h2>

      <div class="row mb-3">
        <div class="col-12">
          <label for="email" class="form-label">Correo Electrónico:</label>
          <input
            type="email"
            autofocus
            placeholder="Ejm: ejemplo@ejemplo.com"
            id="email"
            name="email"
            class="form-control"
            required
            aria-describedby="emailHelp"
            v-model="email"
          />
          <div id="emailHelp" class="form-text text-dark">
            Ingrese el correo electrónico con el que se registro
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-12">
          <label for="password" class="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            required
            aria-describedby="passHelp"
            v-model="password"
          />
          <div id="passHelp" class="form-text text-dark">
            No comparta su contraseña con nadie
          </div>
        </div>
      </div>

      <div class="d-flex flex-column align-items-center">
        <button
          class="btn btn-dark mb-2 w-50"
          @click="
            login({
              email,
              password,
            })
          "
        >
          Inicia Sesión
        </button>

        <p>
          ¿No tienes una cuenta?
          <nuxt-link to="/registro" class="text-decoration-none text-light">
            Regístrate</nuxt-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

import regex from "../static/regex.js";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", ["updateid"]),
    ...mapActions("login", ["updatelogin"]),

    async login(user: User) {
      let clearUser: User = this.clearLogin(user);

      if (this.validateLogin(clearUser)) {
        try {
          const res = await axios.post(
            `${this.$axios.defaults.baseURL}/login`,
            {
              emailUsuario: clearUser.email,
              contrasenaUsuario: clearUser.password,
            }
          );
          if (res.status === 201) {
            this.updateid(res.data._id);
            this.updatelogin(true);
            this.showAlert(`Bienvenido ${res.data.nombreUsuario}`);
            this.$router.push("/");
          } else {
            this.showAlert(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    },

    validateLogin(user: User): boolean {
      if (user.email === "" || user.password === "") {
        this.showAlert("Llene todos los campos");
        return false;
      }

      if (!regex.email.test(user.email)) {
        this.showAlert("El email que ingreso no es un email válido");
        return false;
      }

      if (user.password.length < 8) {
        this.showAlert("La contraseña no puede ser menor de 8 dígitos");
        return false;
      }
      if (!regex.password.test(user.password)) {
        this.showAlert(
          "La contraseña debe cumplir párametros de seguridad. (8-15 caracteres, que incluya mayúscula, minuscula, número, carácter especial y sin espacios en blanco)"
        );
        return false;
      }

      return true;
    },

    clearLogin(user: User): User {
      let userLogin: User = {
        email: user["email"].trim(),
        password: user["password"].trim(),
      };

      return userLogin;
    },

    showAlert(value: string): void {
      alert(value);
    },
  },
});
</script>
