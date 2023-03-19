<template>
  <div
    class="box-container"
    id="recupId"
  >
    <ProductCard v-for="i in [1, 2, 3, 4, 5]" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';
</script>

<style scoped>
.box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
}
</style>
