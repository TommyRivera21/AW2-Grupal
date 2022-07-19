<template>
    <div>
        <b-card title="nombre Tarea" sub-title="Nombre Usuario">
<<<<<<< HEAD

            <b-card-text>{{curso}}</b-card-text>
            <b-card-text>{{descripcionTarea}}</b-card-text>
            <b-card-text>{{precioTarea}}</b-card-text>
            <b-card-text>{{fechaTarea}}</b-card-text>
=======

            <b-card-text>curso: {{curso}}</b-card-text>
            <b-card-text>Descripcion de  tarea: {{descripcionTarea}}</b-card-text>
            <b-card-text>Precio: {{precioTarea}}</b-card-text>
            <b-card-text>Fecha{{fechaTarea}}</b-card-text>
>>>>>>> 3b376f7b816d846f439f390ff3324db2b6cf7364


        </b-card>
    </div>
</template>

<script lang="ts">

export default {
    name:"cardContrato",
    data(){
        return{
            nombreUsuario:"valentin",
            curso:"6to B",
            descripcionTarea:"tarea de BD",
            precioTarea:"$ 22",
            fechaTarea:"2022/07/19"
        }
    }
}
</script>