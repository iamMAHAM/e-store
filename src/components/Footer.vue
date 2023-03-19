<template>
  <section
    class="quick"
    style="
      background: var(--black);
      display: flex;
      align-items: center;
      justify-content: space-between;
    "
  >
    <a
      href="index.html"
      class="logo"
      ><i class="fas fa-store"
        ><span> <b>E</b> Store</span>
      </i></a
    >
    <div class="navbar2">
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/shop">Shop</NuxtLink>
      <NuxtLink to="/cart">Panier</NuxtLink>
      <NuxtLink to="/about">A propos</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
    <div class="share-2">
      <a href=""><i class="fab fa-facebook"></i></a>
      <a href=""><i class="fab fa-instagram"></i></a>
      <a href=""><i class="fab fa-twitter"></i></a>
      <a href=""><i class="fab fa-linkedin"></i></a>
    </div>
  </section>

  <section class="credit">
    <p>Owner <span> Abdul Mahamoudou Kabore </span> all rigths reserved!</p>

    <img
      src=""
      alt=""
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.quick .logo {
  color: white;
  font-size: 2rem;
}

.navbar2 a {
  font-size: 2rem;
  margin: 0 1rem;
  color: var(--white);
}
.navbar2 a:hover {
  color: var(--main);
}

.quick .logo i {
  color: var(--main);
  font-size: 3rem;
}
.quick .logo i span {
  color: white;
  font-weight: 200;
}
.quick .logo i span b {
  color: var(--main);
}

.share-2 a {
  line-height: 5rem;
  font-size: 3rem;
  color: var(--white);
  cursor: pointer;
  text-align: center;
  margin: 0 0.3rem;
}
.share-2 a:hover {
  color: var(--main);
}

.credit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: white;
}

.credit p {
  color: var(--black);
  font-size: 1.5rem;
  font-weight: 200;
}
.credit p span {
  color: var(--main);
}

@media (max-width: 768px) {
  .quick {
    flex-flow: column;
    text-align: center;
  }
  .navbar2 {
    padding: 2rem 0;
  }
  .navbar2 a {
    display: block;
    font-size: 2rem;
    padding: 1rem 0;
  }
  .share-2 a {
    margin: 0 1rem;
  }
  .credit {
    flex-flow: column;
  }
}

@media (max-width: 352px) {
  .quick {
    flex-flow: column;
    text-align: center;
  }
  .navbar2 {
    padding: 2rem 0;
  }
  .navbar2 a {
    display: block;
    font-size: 2rem;
    padding: 1rem 0;
  }
  .share-2 a {
    margin: 0 1rem;
  }
  .credit {
    flex-flow: column;
  }
}
</style>
