<script setup>
import { store } from "../store";
import { ref } from 'vue';
import DogFact from '../components/DogFact.vue';
let count = ref(0);

function randomCount() {
    count.value = Math.floor(Math.random() * store.dogFacts.fact.length);
}

</script>

<template>
    <h1>About This Website</h1>
    <p>This is a website about dogs.</p>
    <DogFact :fact="store.dogFacts.fact[count]" />
    <button @click="randomCount()">Tell me another</button>
    
</template>

<style scoped>
</style>
