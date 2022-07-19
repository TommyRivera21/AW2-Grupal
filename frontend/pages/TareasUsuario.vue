<template>
  <div class="container py-3">
    <div class="row">
      <nuxt-link to="/student" class="col-2">
        <button class="btn btn-outline-dark border-dark">Regresar</button>
      </nuxt-link>
      <h1 class="text-center col-10">Tareas</h1>
    </div>
    <ListaTareas />
  </div>
</template>

<script>
import ListaTareas from "../components/ListaTareas.vue";
export default {
    head() {
        return {
            title: "ServiTareas | Tareas",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Pagina que muestra todas las tareas publicadas",
                },
            ],
        };
    },
    components: { ListaTareas }
};
</script>