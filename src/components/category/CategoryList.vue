<template>
  <div class="box-container">
    <CategoryCard v-for="i in [...Array(6).keys()]" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}
</style>
