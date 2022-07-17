<template>
  <div class="row">
    <div class="col-7">
      <div class="container">
        <div class="row">
          <div
            style="max-width: 18rem"
            role="button"
            v-for="item of tasks"
            :key="item._id"
            :class="{
              'card text-dark bg-light col-6 my-3 mx-2': item.advertencia === 2,
              'card text-dark bg-warning col-6 my-3 mx-2':
                item.advertencia === 1,
              'card text-white bg-danger col-6 my-3 mx-2':
                item.advertencia === 0,
            }"
            @click="mostrar(item._id)"
          >
            <div class="card-header text-center">
              {{ item.fechaEntrega }}
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">{{ item.nombre }}</h5>
              <p class="card-text">
                {{ item.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-5">
      <div class="container border border-dark">
        <div class="row">
          <div class="col-12 py-3">
            <h2 class="text-center">Detalle de Tarea</h2>
            <hr />
            <p class="fs-5">
              <strong class="text-primary">Nombre: </strong>
              {{ nombre }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Descripción: </strong>
              {{ descripcion }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Nivel: </strong>
              {{ nivel }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Asignatura: </strong>
              {{ asignatura }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Fecha de Entrega: </strong>
              {{ fecha }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Parametro: </strong>
              {{ parametro }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Ponderación: </strong>
              {{ ponderacion }}
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tasks: [],
      nombre: "",
      descripcion: "",
      nivel: "",
      asignatura: "",
      parametro: "",
      ponderacion: "",
      fecha: "",

      carrera: "",
      niveles: [],
      asignaturas: [],
    };
  },

  computed: {
    ...mapGetters("authentic", ["id", "rol"]),
  },

  methods: {
    async mostrar(taskId) {
      try {
        const res = await axios.get(
          `${this.$axios.defaults.baseURL}/task/${taskId}`
        );

        this.nombre = res.data.nombre;
        this.descripcion = res.data.descripcion;
        this.nivel = res.data.paralelo;
        this.asignatura = res.data.asignatura;
        this.parametro = res.data.parametro;
        this.ponderacion = `${res.data.ponderacion} % de la nota final`;
        this.fecha = moment(res.data.fechaEntrega).format(
          "DD/MMM/YYYY hh:mm a"
        );
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    if (this.id !== "" && this.rol === "Estudiante") {
      // consulta de los datos del estudiante

      try {
        const resp = await axios.get(
          `${this.$axios.defaults.baseURL}/student/${this.id}`
        );

        this.carrera = resp.data.carrera;
        resp.data.niveles.forEach((element) => {
          this.niveles.push(element.nombre);
          element.asignaturas.forEach((element) => {
            this.asignaturas.push(element.nombre);
          });
        });
      } catch (error) {
        console.log(error);
      }

      //   consulta general de tareas

      try {
        const res = await axios.get(`${this.$axios.defaults.baseURL}/task`, {
          params: {
            pageSize: 1,
          },
        });

        res.data.map((dato) => {
          if (moment() > moment(dato.fechaEntrega)) {
            dato.advertencia = 0;
          } else {
            if (moment(dato.fechaEntrega).subtract(2, "d") < moment()) {
              dato.advertencia = 1;
            } else {
              dato.advertencia = 2;
            }
          }

          dato.fechaEntrega = moment(dato.fechaEntrega).format(
            "DD/MMM/YYYY hh:mm a"
          );

          return dato;
        });

        res.data.forEach((element) => {
          if (
            element.carrera === this.carrera &&
            this.niveles.includes(element.paralelo) &&
            this.asignaturas.includes(element.asignatura)
          ) {
            this.tasks.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
