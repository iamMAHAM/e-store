<template>
  <div class="box">
    <div class="image">
      <img
        src="https://source.unsplash.com/random"
        class="main-img"
        alt=""
      />
      <img
        src="https://source.unsplash.com/random?infor"
        class="hover-img"
        alt=""
      />
    </div>
    <div class="icons">
      <a
        href="#"
        class="fas fa-shopping-cart"
      ></a>
      <a
        href="#"
        class="fas fa-search-plus"
      ></a>
      <a
        href="#"
        class="fas fa-heart"
      ></a>
      <a
        href="#"
        class="fas fa-share"
      ></a>
    </div>

    <div class="content">
      <h3 class="nom">Smartphones</h3>
      <div class="price">
        345£
        <!--<span> 450£</span>-->
      </div>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  padding: 2rem;
  /* border: var(--border); */
  box-shadow: var(--box-shadow);
  background: var(--white);
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  position: relative;
  display: grid;
}

.box:hover {
  transform: scale(1.1);
}
.box:hover .hover-img {
  display: inline-block;
}
.box:hover .main-img {
  display: none;
}

.box:hover .icons {
  left: 1rem;
}

.box .image img {
  position: relative;
  height: 17rem;
  animation: fadIn 0.2s linear;
  object-fit: center;
}
.hover-img {
  display: none;
}

.box .icons {
  position: absolute;
  top: 0;
  left: -7rem;
  padding: 2rem 0;
  right: 2rem;
}
.box .icons a {
  display: block;
  margin-top: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  background: var(--black);
  color: var(--white);
}
.box .icons a:hover {
  background: var(--main);
}

.box .content {
  padding-top: 1rem;
}

.box .content h3 {
  font-size: 2rem;
  color: var(--black);
}
.box .content .price {
  font-size: 2.2rem;
  color: var(--main);
  padding-bottom: 0.7rem;
  padding-top: 0.5rem;
}

.box .content .price button {
  background: var(--main);
  font-size: 1.5rem;
  color: var(--light-color);
  height: 4rem;
  width: 5rem;
  border-radius: 0.5rem;
}

.box .content .stars {
  font-size: 1.5rem;
  color: #e8b90d;
}
</style>
