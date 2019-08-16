<template>
  <div>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height">
      <v-img
        :src="personaje.image"
        aspect-ratio="1"
      >
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular indeterminate></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
     <v-card-text>
      <div class="informacion">
        <div class="informacion-fila">
            <span> Nombre: </span>
            <span class="informacion__texto">
                {{ personaje.name }}
            </span>
        </div>
        <div class="informacion-fila">
            <span> Status: </span>
            <span class="informacion__texto">
                {{ personaje.status }}
            </span>
        </div>
        <div class="informacion-fila">
            <span>Especie: </span>
            <span class="informacion__texto">
                {{ personaje.species }}
            </span>
        </div>
        <div class="informacion-fila">
            <span>Género: </span>
            <span class="informacion__texto">
                {{ personaje.gender }}
            </span>
        </div>
      </div>
    </v-card-text>
    </v-card>
  </div>
</template>
<script>


export default {
  name: 'TarjetaPersonaje',
  props: {
    personaje: {
      type: Object,
      default: () => {},
    },
  },
  components: {
  },
  data() {
    return {
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 344,
      height: undefined,
    };
  },
  methods: {
  },
};
</script>
<style scoped>
div /deep/ .v-card__text {
  background-color: #1B1847;
}
.informacion {
  display: flex;
  flex-direction: column;
  color: #08B2CA
}
.informacion-fila {
  display: flex;
  justify-content: space-between;
}
.informacion__texto {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
