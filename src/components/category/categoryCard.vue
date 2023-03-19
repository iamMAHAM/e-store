<template>
  <div class="box">
    <img
      src="https://source.unsplash.com/random?sport"
      alt=""
    />
    <h3>Accessoires</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, animi?
    </p>
  </div>
</template>

<script setup lang="ts"></script>

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
