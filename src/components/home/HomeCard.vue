<template>
  <div class="box">
    <i class="fa-solid fa-shop"></i>
    <h3>+20</h3>
    <p>Boutiques</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  border: var(--main-color);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  text-align: center;
  padding: 3.5rem;
}
.box:hover {
  transform: scale(1.1);
}
.box i {
  font-size: 2rem;
  color: var(--main);
  padding-bottom: 0.7rem;
}

.box h3 {
  font-size: 3rem;
  color: var(--black);
  padding: 0.5rem 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.box p {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
  font-size: 2rem;
  padding-top: 0.5rem;
}
</style>
