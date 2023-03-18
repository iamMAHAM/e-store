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
.shopping-cart .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
  position: relative;
}
.shopping-cart .box-container .box {
  padding: 2rem;
  border: var(--border);
  box-shadow: var(--box-shadow);
  display: grid;
  align-items: center;
  gap: 0.7rem;
  background: var(--white);
  border-radius: 0.5rem;
  position: relative;
  justify-content: center;
}
.shopping-cart .box-container .box img {
  height: 15rem;
}

.shopping-cart .box-container .box .fa-times {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 3rem;
  color: var(--light-color);
  cursor: pointer;
}

.shopping-cart .box-container .box .content h3 {
  font-size: 1.7rem;
  color: var(--black);
}
.shopping-cart .box-container .box form {
  padding: 1rem 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.shopping-cart .box-container .box form span {
  font-size: 1.5rem;
  color: var(--light-color);
}
.shopping-cart .box-container .box form input {
  width: 7rem;
  padding: 0.5rem 1rem;
  color: var(--light-color);
  border-radius: 0.5rem;
  background: var(--light-bg);
  font-size: 1.5rem;
}

.prix {
  font-size: 2rem;
  color: var(--main);
}
.prix span {
  font-size: 1.5rem;
  color: var(--light-color);
  text-decoration: line-through;
}

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
