<template>
  <v-container
     fluid>
    <v-layout wrap>
      <v-flex
          xs6
          sm4
          md3
          pa-2
          v-for="(personaje, id) in listadoPersonajes.results"
          :key="id">
        <TarjetaPersonaje
          :personaje="personaje"/>
      </v-flex>
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
    return {};
  },
  computed: {
    ...mapGetters({
      listadoPersonajes: 'listadoPersonajes',
    }),
  },
  methods: {
  },
};
</script>
<style scoped>
@media only screen and (min-width: 960px) {
.container {
  max-width: 900px;
}
}
</style>
