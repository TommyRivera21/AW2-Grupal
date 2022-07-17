<template>
  <div class="container">
    <div class="table-responsive">
      <table
        id="table"
        class="table table-bordered table-striped text-center table-hover border-dark align-middle"
      >
        <thead class="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item of tasks"
            :key="item._id"
            :class="{
              'bg-light': item.advertencia === 2,
              'bg-warning': item.advertencia === 1,
              'bg-danger': item.advertencia === 0,
            }"
          >
            <td>{{ item.nombreTarea }}</td>
            <td>{{ item.descripcionTarea }}</td>
            <td>{{ item.fechaTarea }}</td>
            <td>{{ item.estadoTarea }}</td>
            <td>{{ item.precioTarea }}</td>
            <td>
              <nuxt-link
                :to="{
                  path: '/usuarioregistrado/tasks/form',
                  query: {
                    taskId: item._id,
                    nombre: item.nombreTarea,
                    descripcion: item.descripcionTarea,
                    fecha: item.fechaTarea,
                    estado: item.estadoTarea,
                    precio: item.precioTarea,
                  },
                }"
              >
                <button class="btn btn-primary">E</button>
              </nuxt-link>
              <button
                :class="{
                  'btn btn-warning': item.advertencia === 0,
                  'btn btn-danger':
                    item.advertencia === 1 || item.advertencia === 2,
                }"
                @click="eliminarTarea(item._id)"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">

  import axios from "axios";
  import moment from "moment";
  import jquery from "jquery";
  import { mapGetters } from "vuex";
  
  
  type eliminarTareaResponse = {
    tasks: any,
  };
  
  type createdTareaResponse = {
    map: any;
    nombreTarea: string,
    descripcionTarea: string,
    fechaTarea: string,
    estadoTarea: string,
    precioTarea: string,
    tasks: any,
  };

  export default {
    name: "Crud",
    data() {
      return {
        tasks: [],
      };
  },

  computed: {
    ...mapGetters("authentic", ["id"]),
  },

  methods: {
    async eliminarTarea(id:string) {
      try {
        const res = await axios.delete<eliminarTareaResponse>(
          `$this.$axios.defaults.baseURL}/task/${id}`
          );
        `this.$router.push("/usuarioregistrado/")`;
        } catch (error) {
      console.log(error);
    }
  },
},

async created(id:string) {
    try {
      const res = await axios.get<createdTareaResponse>(
        `$this.$axios.defaults.baseURL}/task/usuarioregistradoId${id}`
          );

      res.data.map((dato: { fechaTarea: moment.MomentInput; advertencia: number; }) => {
        if (moment() > moment(dato.fechaTarea)) {
          dato.advertencia = 0;
        } else {
          if (moment(dato.fechaTarea).subtract(2, "d") < moment()) {
            dato.advertencia = 1;
          } else {
            dato.advertencia = 2;
          }
        }
        dato.fechaTarea = moment(dato.fechaTarea).format(
          "YYYY-MM-DD hh:mm a"
        );
        return dato;
      });
      this.tasks = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

</script>
