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
              {{ item.fechaTarea }}
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">{{ item.nombreTarea }}</h5>
              <p class="card-text">
                {{ item.descripcionTarea }}
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
            <hr>
            <p class="fs-5">
              <strong class="text-primary">Nombre: </strong>
              {{ nombreTarea }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Fecha: </strong>
              {{ fechaTarea  }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Estado: </strong>
              {{ estadoTarea }}
            </p>
            <p class="fs-5">
              <strong class="text-primary">Precio: </strong>
              {{ precioTarea }}
            </p>
            <hr >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>
