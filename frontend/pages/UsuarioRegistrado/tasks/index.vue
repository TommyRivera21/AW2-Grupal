<template>
<div class="container pt-3">
        <div class="row">
        <nuxt-link to="/teacher" class="col-2">
            <button class="btn btn-outline-dark border-dark">Regresar</button>
        </nuxt-link>
        <h2 class="text-center col-8">Panel de Administración de Tareas</h2>
        <nuxt-link to="/teacher/tasks/form" class="col-2">
            <button class="btn btn-info fw-bold border-dark">Nueva Tarea</button>
            </nuxt-link>
        </div>
        <div class="row">
            <Crud class="col-12 mt-3" />
        </div>
    </div>
</template>

<script>
    export default {
    head() {
        return {
        title: "Tareas",
        meta: [
            {
            hid: "description",
            name: "description",
            content: "Panel de Administración de Tareas para FACCI-ULEAM",
            },
        ],
        link: [
            {
            rel: "stylesheet",
            href: "https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css",
            },
        ],
        script: [
            {
            src: "https://code.jquery.com/jquery-3.5.1.js",
            body: true,
            },
            {
            src: "https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js",
            body: true,
            },
            {
            src: "https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap5.min.js",
            body: true,
            },
        ],
        };
    },
    };
</script>
