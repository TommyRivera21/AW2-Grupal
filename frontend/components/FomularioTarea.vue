<!-- <template>
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

interface ITask {
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
      taskId: "",
    };
  },

  computed: {
    ...mapGetters("authentic", ["id"]),
  },
  methods: {
    async guardarTarea(nombre:string, descripcion:string, fechaTarea:string, precioTarea:string) {
      let task = {
        nombreTarea: nombre,
        descripcionTarea: descripcion,
        fechaTarea: fechaTarea,
        estadoTarea: "false",
        precioTarea: precioTarea,
        usuarioregistrado: `this.id`,
      };
      if (this.taskId === "") {
        console.log(task);
        try {
          const res = await axios.post<guardarTarea>(`${this.$axios.defaults.baseURL}/task/usuarioregistradoId${id}`, task);
          if (res.status === 201) {
            // vaciando los inputs para que se puedan ingresar mas tareas
            this.nombreTarea = "";
            this.descripcionTarea = "";
            this.fechaTarea = "";
            this.estadoTarea = "";
            this.precioTarea = "";
            this.parametroSeleccionado = "";
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(task);
        try {
          const res = await axios.patch(
            `$this.$axios.defaults.baseURL/task/$this.taskId`,
            task
          );
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
        `this.$router.push("/usuarioregistrado/tasks")`;
      }
    },
  },

  async created() {
    if (this.id === "") {
      console.log("No ha iniciado sesion como profesor");
    } else {
      try {
        const res = await axios.get(
          `${this.$axios.defaults.baseURL}/teacher/${this.id}`
        );

        res.data.carreras.forEach((element) => {
          this.carreras.push(element.nombre);
          this.carreras.sort();
          element.niveles.forEach((element) => {
            this.niveles.push(element.nombre);
            this.niveles.sort();
            element.asignaturas.forEach((element) => {
              this.asignaturas.push(element.nombre);
              this.asignaturas.sort();
            });
          });
        });
      } catch (error) {
        console.log(error);
      }
    }

    console.log(this.$route.query);
    if (this.$route.query.hasOwnProperty("taskId")) {
      // agregando la informacion a los inputs traida desde el crud

      this.taskId = this.$route.query.taskId;
      this.nombreTarea = this.$route.query.nombre;
      this.descripcionTarea = this.$route.query.descripcion;
      this.estadoTarea = this.$route.query.estadoTarea;
      this.nivelSeleccionado = this.$route.query.nivel;
      this.asignaturaSeleccionado = this.$route.query.asignatura;
      this.parametroSeleccionado = this.$route.query.parametro;
      this.ponderacion = this.$route.query.ponderacion;
      this.fechaTarea = (`this.$route.query.fechaTarea`); 
    }
  },
};
</script>
 -->