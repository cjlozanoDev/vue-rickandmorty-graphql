<template>
  <div class="home">
    <HerramientasBusqueda
      @buscar-personaje="buscarPersonaje"/>
    <ListadoPersonajes />
    <v-overlay :value="loading">
     <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import HerramientasBusqueda from '../components/HerramientasBusqueda.vue';
import ListadoPersonajes from '../components/ListadoPersonajes.vue';

export default {
  name: 'Home',
  components: {
    HerramientasBusqueda,
    ListadoPersonajes,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      listadoPersonajes: 'listadoPersonajes',
    }),
  },
  methods: {
    buscarPersonaje(estado, nombre) {
      this.loading = true;
      this.$store.dispatch('obtenerPersonajes', {
        nombre,
        estado,
        apollo: this.$apollo,
      }).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>
<style scoped>
</style>
