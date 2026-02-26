<script setup>
import Popover from 'primevue/popover'; 
import ImageCard from '../components/ImageCard.vue';
</script>


<template>
    <div class="gallery-grid">
        <ImageCard imageUrl="/src/assets/images/strawberry-hat.webp"
    imageCaption="Strawberry Hat"
    />
    <ImageCard imageUrl="/src/assets/images/dapper.jpg"
    imageCaption="Dapper"
    />
    <ImageCard imageUrl="/src/assets/images/cowboy.jpg"
    imageCaption="Cowboy Hat"
    />
    </div>

</template>

<style scoped>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

</style>
