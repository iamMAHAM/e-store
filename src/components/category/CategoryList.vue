<template>
  <div class="box-container">
    <CategoryCard
      v-for="category in categories"
      :category="category"
      :key="category.id"
    />
  </div>
</template>

<script setup lang="ts">
const { data: categories } = await useFetch('/api/category');
</script>

<style scoped>
.box-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}
</style>
