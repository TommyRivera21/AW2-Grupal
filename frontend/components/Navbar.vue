<template>
  <nav class="navbar navbar-dark bg-dark px-5 py-3">
    <div class="w-100 row">
      <div class="col-4 d-flex justify-content-center">
        <nuxt-link class="navbar-brand" to="/">Servi Tareas</nuxt-link>

        <ul class="navbar-nav me-auto d-flex flex-row">
          <li class="nav-item me-3" v-if="login">
              <nuxt-link to="/UsuarioRegistrado" class="nav-link active"
              >Estudiante</nuxt-link
            >
          </li>
          <li class="nav-item" v-else>
            <nuxt-link to="/" class="nav-link active">FACCI-ULEAM</nuxt-link>
          </li>
        </ul>
      </div>

      <div
        class="text-light col-4 d-flex justify-content-center align-items-center"
      >
        <span v-if="login">Bienvenido {{ name }}</span>
        <span v-else>Inicia Sesión</span>
      </div>

      <div class="col-4 d-flex justify-content-end align-items-center">
        <nuxt-link to="/" v-if="login">
          <button @click="cerrarSesion" class="btn btn-danger rounded-3">
            Cerrar Sesión
          </button>
        </nuxt-link>
        <nuxt-link to="/login" class="text-decoration-none" v-else>
          <button class="btn btn-success rounded-3">Iniciar Sesión</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

  import { mapActions, mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters("login", ["id", "name", "login"]),
    },

    methods: {
      ...mapActions("login", ["cerrarSesion"]),
    },
  };
</script>
