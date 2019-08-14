<template>
  <div>
    <div class="herramientas">
      <div>
        <v-select
          v-model="estadoPersonaje"
          :items="items"
          solo
        ></v-select>
      </div>
      <div class="text-field">
        <v-text-field
          placeholder="Nombre del personaje"
          solo
        ></v-text-field>
      </div>
      <div class="boton">
        <v-btn
          color="#08B2CA"
          class="white--text"
        >Buscar</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HerramientasBusqueda',
  data() {
    return {
      texto: 'herramientas',
      items: [
        {
          text: 'Vivo',
          value: 'alive',
        },
        {
          text: 'Muerto',
          value: 'dead',
        },
        {
          text: 'Desconocido',
          value: 'unknown',
        },
      ],
      estadoPersonaje: 'alive',
    };
  },
};
</script>

<style scoped>
.herramientas {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.text-field, .boton {
  margin-left: 10px;
}
.boton {
  color: white;
}
</style>
