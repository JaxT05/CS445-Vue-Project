<script setup>
import { ref } from 'vue';
import DogModal from './DogModal.vue';

const showModal = ref(false);
</script>
<script>
export default {
  name: 'ImageCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    imageCaption: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
    <div class="image-card">
        <img :src="imageUrl" class="image" />
        <p>'{{ imageCaption }}'</p>
        <button @click="showModal = true">View</button>
    </div>

    <DogModal :image="imageUrl" v-if="showModal" @close="showModal = false" />

</template>

<style scoped> 
.image-card {
   background-color: rgb(85, 43, 97);
    width: 20rem;
    height: 20rem;
    border-radius: 5px;
}
.image {
    width: 100%;
    height: 80%;
    object-fit: cover;
}
</style>