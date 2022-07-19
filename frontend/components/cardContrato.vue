<template>
    <div>
        <b-card title="nombre Tarea" sub-title="Nombre Usuario">
   
            <b-card-text>{{curso}}</b-card-text>
            <b-card-text>{{descripcionTarea}}</b-card-text>
            <b-card-text>{{precioTarea}}</b-card-text>
            <b-card-text>{{fechaTarea}}</b-card-text>


        </b-card>
    </div>
</template>

<script lang="ts">

export default {
    name:"cardContrato",
    data(){
        return{
            nombreUsuario:"valentin",
            curso:"adfa",
            descripcionTarea:"dsfas",
            precioTarea:"22",
            fechaTarea:"adf"
        }
    }
}
</script>