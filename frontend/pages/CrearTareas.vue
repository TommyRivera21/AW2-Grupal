<template>
  <div class="container py-3">
    <div class="row">
      <h1 class="text-center">Crea una Tarea</h1>
    </div>
    <div class="row">
      <FomularioTarea class="col-12" />
    </div>
  </div>
</template>

<script lang="ts">
import FomularioTarea from "../components/FomularioTarea.vue";
export default {
    head() {
        return {
            title: "ServiTareas | Formulario Tarea",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Formulario para agregar una nueva tarea o modificar las tareas de los estudiantes de la  FACCI-ULEAM",
                },
            ],
        };
    },
    components: { FomularioTarea }
};
</script>
