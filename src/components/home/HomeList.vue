<template>
  <div class="box-container">
    <HomeCard v-for="i in [1, 2, 3, 4, 5]" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  padding-top: 8rem;
  padding-bottom: 10rem;
  padding-right: 2rem;
}
</style>
