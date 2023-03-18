<template>
  <div>
    <section
      class="home"
      id="home"
    >
      <div class="swiper home-slide">
        <div class="swiper-wrapper">
          <section
            class="swiper-slide slide"
            style="background: url(../assets/landing.jpg) no-repeat"
          >
            <div class="content">
              <h3>bienvenu Dans la Boutique COL</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugit recusandae iure, porro voluptate illo itaque praesentium
                similique tempore adipisci.
              </p>
              <a
                href="shop.html"
                class="btn"
                >commencer</a
              >
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  padding: 0;
}
.home .slide {
  min-height: 60rem;
  display: flex;
  align-items: center;
  position: relative;
  background-size: cover !important;
  background-position: center !important;
}
.home .slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--white), transparent);
}
.home .slide .content {
  width: 50rem;
  position: relative;
}
.home .slide .content h3 {
  font-size: 5rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.home .slide .content p {
  font-size: 1.5rem;
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
}
</style>
