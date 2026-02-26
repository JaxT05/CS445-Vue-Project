<script setup></script>

<template>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/gallery">Gallery</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  background-color: rgb(85, 43, 97);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
}
nav a {
  color: white;
  text-decoration: none;
}
</style>