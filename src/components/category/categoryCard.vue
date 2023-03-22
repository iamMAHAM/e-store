<template>
  <div class="box">
    <img
      :src="category.image"
      :alt="category.title"
    />
    <h3>{{ category.title }}</h3>
    <p>
      {{ category.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Category } from '.prisma/client';

const { category } = defineProps<{ category: Category }>();
</script>

<style scoped>
.box {
  text-align: center;
  padding: 3rem;
  background: var(--white);
  box-sizing: var(--box-shadow);
}
.box:hover img {
  transform: translateY(-1rem);
}
.box img {
  height: 7rem;
  margin-bottom: 0.5rem;
}
.box h3 {
  padding: 1rem 0;
  color: var(--black);
  text-transform: capitalize;
  font-size: 2rem;
}
.box p {
  color: var(--black);
  text-transform: capitalize;
  font-size: 1.5rem;
  padding-top: 0.5rem;
}
</style>
