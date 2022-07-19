<template>
    <div>
        <b-card title="nombre Tarea" sub-title="Nombre Usuario">
   
            <b-card-text>curso: {{curso}}</b-card-text>
            <b-card-text>Descripcion de  tarea: {{descripcionTarea}}</b-card-text>
            <b-card-text>Precio: {{precioTarea}}</b-card-text>
            <b-card-text>Fecha{{fechaTarea}}</b-card-text>


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