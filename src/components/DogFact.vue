<script >
export default {
  name: 'DogFact',
  props: {
    fact: {
      type: String,
      required: true
    }
  }
};

</script>
<template>
    <div class="dog-fact">
        <h3>Dog Fact:</h3>
    <div>{{ fact }}</div>
    </div>
</template>
<style scoped>
.dog-fact {
    padding: 1rem 0.5rem;
    border-radius: 5px;
}
</style>