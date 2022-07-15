<template>
    <div>
        <div class="p-5 bg-light text-dark">
            <div class="row d-flex align-items-center justify-content-center p-5">
                <div class="col-md-12 text-center">
                    <h1>Oops!</h1>
                    <h1 v-if="error.statusCode === 404">PÁGINA NO ENCONTRADA</h1>
                    <h1 v-else>A OCURRIDO UN ERROR</h1>
                </div>
                <div class="col-md-6 text-center">
                    <p v-if="error.statusCode === 404">
                    Es posible que se haya eliminado la página que está buscando, su
                    nombre haya cambiado o no está disponible temporalmente.
                    </p>
                    <p v-else>
                    Tuvimos un error, lo estamos solucionando, mientras puede volver al
                    Inicio con el botón de abajo
                    </p>
                    <nuxt-link to="/" class="nav-item">
                    <button class="btn btn-info">Ir a Inicio</button>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "normal",
};
</script>
