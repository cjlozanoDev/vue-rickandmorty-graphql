<template>
  <v-container
     fluid>
    <v-layout
      wrap
      :justify-center="esCentrado">
      <v-flex
          xs6
          sm4
          md3
          pa-2
          v-for="(personaje, id) in listadoFiltrado"
          :key="id">
        <TarjetaPersonaje
          :personaje="personaje"/>
      </v-flex>
      <div class="bloque-numeros-paginas">
        <v-pagination
            v-model="paginaActual"
            :length="numeroPaginasTotales">
        </v-pagination>
      </div>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
import TarjetaPersonaje from './TarjetaPersonaje.vue';

export default {
  name: 'ListadoPersonajes',
  components: {
    TarjetaPersonaje,
  },
  data() {
    return {
      numeroTarjetasPorPagina: 8,
      paginaActual: 1,
    };
  },
  computed: {
    ...mapGetters({
      listadoPersonajes: 'listadoPersonajes',
      infoListadoPersonajes: 'infoListadoPersonajes',
    }),
    numeroPaginasTotales() {
      if (this.listadoPersonajes.length === 0) {
        return 0;
      }
      return Math.ceil(this.listadoPersonajes.length / this.numeroTarjetasPorPagina);
    },
    listadoFiltrado() {
      if (this.listadoPersonajes.length === 0) {
        return this.listadoPersonajes;
      }
      const indiceComienzo = (this.paginaActual - 1) * this.numeroTarjetasPorPagina;
      const arrayFiltrado = this.listadoPersonajes.slice(indiceComienzo, indiceComienzo
        + this.numeroTarjetasPorPagina);
      return arrayFiltrado;
    },
    esCentrado() {
      const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
      if (this.listadoFiltrado.length < 4 && width > 600) {
        return true;
      }
      return false;
    },
  },
  methods: {
    irANumeroPagina(numero) {
      this.paginaActual = numero;
    },
  },
};
</script>
<style scoped>
.bloque-numeros-paginas {
  width: 100%;
}
@media only screen and (min-width: 960px) {
  .container {
    max-width: 900px;
  }
}
</style>
