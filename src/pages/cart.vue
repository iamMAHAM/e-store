<template>
  <section class="shopping-cart">
    <h1 class="heading"></h1>
    <div
      class="box-container"
      id="recupId"
    >
      <div class="box">
        <i class="fas fa-times"></i>
        <img
          src="images/accessoire.png"
          alt=""
        />
        <div class="content">
          <h3>smartphone</h3>
          <form action="">
            <span>quantité : </span>
            <input
              type="number"
              name=""
              id=""
              value="1"
            />
          </form>
          <div class="prix">249.99$ <span>400.88$</span></div>
        </div>
      </div>

      <div class="box">
        <i class="fas fa-times"></i>
        <img
          src="images/batterie-2.png"
          alt=""
        />
        <div class="content">
          <h3>smartphone</h3>

          <form action="">
            <span>quantité : </span>
            <input
              type="number"
              name=""
              id=""
              value="1"
            />
          </form>
          <div class="prix">249.99$ <span>400.88$</span></div>
        </div>
      </div>

      <div class="box">
        <i class="fas fa-times"></i>
        <img
          src="images/maillot.webp"
          alt=""
        />
        <div class="content">
          <h3>smartphone</h3>

          <form action="">
            <span>quantité : </span>
            <input
              type="number"
              name=""
              id=""
              value="1"
            />
          </form>
          <div class="prix">249.99$ <span>400.88$</span></div>
        </div>
      </div>

      <div class="box">
        <i class="fas fa-times"></i>
        <img
          src="images/bracelet-2.png"
          alt=""
        />
        <div class="content">
          <h3>smartphone</h3>

          <form action="">
            <span>quantité : </span>
            <input
              type="number"
              name=""
              id=""
              value="1"
            />
          </form>
          <div class="prix">249.99$ <span>400.88$</span></div>
        </div>
      </div>

      <div class="box">
        <i class="fas fa-times"></i>
        <img
          src="images/tablette.png"
          alt=""
        />
        <div class="content">
          <h3>smartphone</h3>

          <form action="">
            <span>quantité : </span>
            <input
              type="number"
              name=""
              id=""
              value="1"
            />
          </form>
          <div class="prix">249.99$ <span>400.88$</span></div>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <h3>total : <span>$144.77</span></h3>
      <h3>rabais : <span>-$144.78</span></h3>
      <h3>total : <span>$144.78</span></h3>
      <a
        href="https://wagroupes.com/groups/wagroups-EVLKMfn8DNoEYyKVRpF8Pa"
        class="btn"
        >payer</a
      >
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.shopping-cart .cart-total {
  padding-top: 1rem;
  box-shadow: var(--box-shadow);
  border: var(--border);
  border-radius: 0.5rem;
  background: var(--white);
  margin-top: 2rem;
  padding: 2rem;
}

.shopping-cart .cart-total h3 {
  padding-top: 1rem;
  font-size: 2rem;
  color: var(--black);
}
.shopping-cart .cart-total h3 span {
  color: var(--main);
}

.shopping-cart .cart-total .btn {
  border-radius: 0.7rem;
}
</style>
