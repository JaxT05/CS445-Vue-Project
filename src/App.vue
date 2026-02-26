<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
  <body>
    <header>
       <Navigation/>
    </header>

    <main>
      <RouterView />
    </main>
  </body>
</template>

<style scoped>
</style>
