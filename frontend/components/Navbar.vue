<template>
  <nav class="navbar navbar-dark bg-dark px-5 py-3">
    <div class="w-100 row">
      <div class="col-4 d-flex justify-content-center">
        <nuxt-link class="navbar-brand" to="/">Servi Tareas</nuxt-link>
        <ul class="navbar-nav me-auto d-flex flex-row">
              <nuxt-link to="/UsuarioRegistrado" class="nav-link active"
              >Usuario</nuxt-link>
        </ul>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <nuxt-link to="/login" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Iniciar Sesión</button>
        </nuxt-link>
        <nuxt-link to="/Registro" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Registrate</button>
        </nuxt-link>
        <nuxt-link to="/UsarioRegistrado/Perfil" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Perfil</button>
        </nuxt-link>
        <nuxt-link to="/CrearTareas" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Crear Tareas</button>
        </nuxt-link>
        <nuxt-link to="/TareasUsurario" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Tareas</button>
        </nuxt-link>
        <nuxt-link to="/Contratos" class="text-decoration-none">
          <button class="btn btn-success rounded-3">Contratos</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
