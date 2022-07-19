<template>
<div id="navbar2">
  <b-navbar toggleLeable="md" type="dark" variant="dark">

   <b-container>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Servi Tareas</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Iniciar'}" exact>Iniciar Sesion</b-nav-item>
        <b-nav-item :to="{name: 'Registro'}">Registrate</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

   </b-container>

  </b-navbar>
</div>
</template>
