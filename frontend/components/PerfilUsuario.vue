<template>
  <div class="container d-flex justify-content-center p-4">
    <div class="card border-info text-center w-50">
      <div class="card-header bg-info">
        <h3>{{ student.nombreUsuario }} {{ student.apellidoUsuario }}</h3>
      </div>
      <div class="card-body">
        <p class="card-text">
          <strong>Usuario: </strong> {{ student.usuario }}
        </p>
        <p class="card-text">
          <strong>Curso: </strong> {{ student.cursoUsuario }}
        </p>
        <p class="card-text">
          <strong>Carrera: </strong> {{ student.carreraUsuario }}
        </p>
        <p class="card-text">
          <strong>Email: </strong> {{ student.emailUsuario }}
        </p>
        <p class="card-text">
          <strong>Fecha de Nacimiento: </strong> {{ student.fechaUsuario }}
        </p>
      </div>
      <div class="card-footer text-muted">Perfil de Usuario</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import axios from "axios";
import moment from "moment";

export default Vue.extend({
  data() {
    return {
      student: {},
    };
  },

  computed: {
    ...mapGetters("user", ["id"]),
  },

  async created() {
    try {
      const res = await axios.get(`${this.$axios.defaults.baseURL}/${this.id}`);

      if (res.status === 201) {
        res.data.fechaUsuario = moment(res.data.fechaUsuario).format(
          "DD/MM/YYYY"
        );
        this.student = res.data;
      } else {
        this.showAlert(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    showAlert(value: string): void {
      alert(value);
    },
  },
});
</script>
