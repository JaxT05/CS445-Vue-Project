<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["showModal", "imageUrl"]);
const modalStates = defineEmits(["close"]);
const closeModal = () => modalStates("close");
</script>

<template>
  <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <button class="close-button" @click="closeModal">×</button>
      <img class="modal-image":src="imageUrl" />
    </div>
  </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.modal-image{ 
    max-height: 80%;
}
.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}
</style>

