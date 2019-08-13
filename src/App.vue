<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <main class="app">
        <header class="header">
          <h1> Rick and Morty</h1>
        </header>
        <section class="section">
          <router-view></router-view>
        </section>
      </main>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style scoped>
</style>
