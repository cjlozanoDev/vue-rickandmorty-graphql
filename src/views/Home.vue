<template>
  <div>
    <HerramientasBusqueda
      @buscar-personaje="buscarPersonaje"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import HerramientasBusqueda from '../components/HerramientasBusqueda.vue';

export default {
  name: 'App',
  components: {
    HerramientasBusqueda,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      listadoPersonajes: 'listadoPersonajes',
    }),
  },
  methods: {
    buscarPersonaje(estado, nombre) {
      this.$store.dispatch('obtenerPersonajes', {
        nombre,
        estado,
        apollo: this.$apollo,
      });
    },
  },
};
</script>
<style scoped>
</style>
