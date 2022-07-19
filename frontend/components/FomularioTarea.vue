<template>
  <div class="container">
    <form @submit.prevent>
        <div class="row mb-3">
            <div class="col-12">
                <label for="name" class="form-label">Nombre de la Tarea</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="nombreTarea"
                    required
                />
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea
                    class="form-control"
                    id="descripcion"
                    rows="4"
                    v-model="descripcionTarea"
                    required
                ></textarea>
            </div>
        </div>

        <div class="col-3">
          <label for="fecha" class="form-label">Fecha de Entrega</label>
            <input
              type="date"
              :min="fechaTarea"
              class="form-control"
              id="fecha"
              v-model="fechaTarea"
              required
            />
        </div>

        <div class="col-3">
          <label for="fecha" class="form-label">Estado</label>
            <input
              type="boolean"
              :min="estadoTarea"
              class="form-control"
              id="estado"
              v-model="estadoTarea"
              required
            />
        </div>

        <div class="col-3">
          <label for="fecha" class="form-label">Precio de la Tarea</label>
            <input
              type="number"
              :min="precioTarea"
              class="form-control"
              id="preciofecha"
              v-model="precioTarea"
              required
            />
        </div>

      <div class="d-flex justify-content-center">
        <button class="btn btn-success mx-2" @click="guardarTarea">
          Guardar
        </button>
        <nuxt-link to="/teacher/tasks" class="mx-2">
          <button class="btn btn-danger">Cancelar</button>
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import axios from "axios";
import jQuery from "jquery";

import { mapGetters } from "vuex";

interface ITarea {
  id: string;
  nombreTarea: string; 
  descripcionTarea: string;
  fechaTarea: string;
  estadoTarea: boolean;
  precioTarea: number;
  taskId : string;
};

type  guardarTarea = {
    nombreTarea: string,
    descripcionTarea: string,
    fechaTarea: string,
    estadoTarea: string,
    precioTarea: string,
    usuarioregistrado: string;
    taskId: string,
  };

export default {
  data() {
    return {
      nombreTarea: "",
      descripcionTarea: "",
      fechaTarea: "",
      estadoTarea: "",
      precioTarea: "",
    };
  },

  methods: {
    async guardarTarea() {

    },
  },
    async created() {

    },
};
</script>
