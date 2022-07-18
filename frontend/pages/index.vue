<template >
  <div
    id="carouselExampleCaptions"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="/fondo1.jpg"
          class="d-block w-100"
          alt="Imagen de fondo para el modulo de estudiantes"
          height="720"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2>Usuario</h2>
          <p >
            Si eres un usuario regitrado podrás solicitar y realizar tareas de 
            otros usuarios
          </p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img
          src="/fondo2.jpg"
          class="d-block w-100"
          alt="Imagen de fondo para el modulo de profesores"
          height="720"
        />
      </div>
      <div class="carousel-item" data-bs-interval="10000">
        <img
          src="/fondo3.png"
          class="d-block w-100"
          alt="Imagen de fondo de la Infraestructura de la FACCI"
          height="720"
        />
        <div class="carousel-caption d-none d-md-block">
          <h2 class="text-light">FACCI</h2>
          <p class="text-light">
            Este sistema de tareas esta disponible actualmente solo para la
            FACCI de la ULEAM
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
  export default {
    head() {
      return {
        title: 'ServiTareas | Inicio',
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Website de Tareas para la FACCI-ULEAM",
          },
        ],
      };
    },
  };
</script>
