<script>
import { ref } from 'vue';
const showModal=ref(false);</script>

<template>
    <div class="modal" v-if="showModal">
        <div class="modal-content">
            <img :src="image" class="modal-image" />
            
            <button @click="showModal = false">Close</button>
        </div>
    </div>

</template>
<style scoped>
.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(98, 0, 65, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

