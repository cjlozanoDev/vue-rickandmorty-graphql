<template>
  <v-app>
    <main class="app">
      <v-content transition="slide-x-transition">
        <v-toolbar color ="#1B1847" img="">
          <div class="contenedor-imagen">
            <v-img
              src="./assets/rick_and_morty.png"
              max-height="80px"
              contain
            />
          </div>
        </v-toolbar>
        <section class="section">
          <router-view></router-view>
        </section>
      </v-content>
    </main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.app {
  min-height: 100%;
  background-color: #F4F4F4;
}
.section {
  padding: 20px
}
.contenedor-imagen {
  width: 100%;
  height: 80px;
}
</style>
