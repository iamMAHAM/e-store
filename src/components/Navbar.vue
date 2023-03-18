<template>
  <header class="header">
    <NuxtLink
      class="logo"
      to="/"
      >E-store</NuxtLink
    >

    <div
      class="navbar"
      ref="navbar"
    >
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/shop">Shop</NuxtLink>
      <NuxtLink to="/cart">Panier</NuxtLink>
      <NuxtLink to="/about">A propos</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
    <div class="icons">
      <div
        id="menu-btn"
        class="fa-solid fa-bars"
        ref="menu"
      ></div>
      <div
        id="info-btn"
        class="fa-solid fa-circle-info"
      ></div>
      <div
        id="search-btn"
        class="fa-solid fa-search"
        ref="search"
      ></div>
      <div
        id="login-btn"
        class="fa-solid fa-user"
        ref="login"
      ></div>
    </div>

    <form
      action="#"
      class="search-form"
      ref="searchForm"
    >
      <input
        type="search"
        placeholder="search here..."
        class="search"
        id="search-box"
      />
      <label
        for=""
        class="fas fa-search"
      ></label>
    </form>

    <form
      action=""
      class="login-form"
      id="loginFunction"
      ref="loginForm"
    >
      <h3>CONNEXION</h3>
      <input
        type="email"
        placeholder="entrer your email"
        class="box"
        id="email"
      />
      <input
        type="password"
        placeholder="entrer your password"
        class="box"
        id="password"
      />
      <div class="flex">
        <input
          type="checkbox"
          name=""
          id="remember-me"
        />
        <label for="remember-me">se souvenir de moi!</label>
        <a href="#">Mot de passse oublier ?</a>
      </div>
      <input
        type="submit"
        value="login now"
        class="btn"
        id="button "
      />
      <p>
        vous n'avez pas de compte?<a href="inscription.html">cree un compte?</a>
      </p>
      <Login />
    </form>
  </header>
</template>

<script setup lang="ts">
const menu = ref<HTMLDivElement | null>(null);
const search = ref<HTMLDivElement | null>(null);
const login = ref<HTMLDivElement | null>(null);
const navbar = ref<HTMLDivElement | null>(null);
const searchForm = ref<HTMLDivElement | null>(null);
const loginForm = ref<HTMLDivElement | null>(null);

const handleScroll = () => {
  searchForm.value?.classList.remove('active');
  loginForm.value?.classList.remove('active');
};

onMounted(() => {
  menu.value?.addEventListener('click', () => {
    navbar.value?.classList.toggle('active');
    searchForm.value?.classList.remove('active');
    loginForm.value?.classList.remove('active');
  });

  search.value?.addEventListener('click', () => {
    searchForm.value?.classList.toggle('active');
    navbar.value?.classList.remove('active');
    loginForm.value?.classList.remove('active');
  });

  login.value?.addEventListener('click', () => {
    loginForm.value?.classList.toggle('active');
    searchForm.value?.classList.remove('active');
    navbar.value?.classList.remove('active');
  });

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: var(--box-shadow);
  padding: 1.5rem 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background: var(--white);
}

.header .logo {
  font-size: 2.5rem;
  color: var(--main);
  text-transform: capitalize;
}
.header .logo span {
  color: var(--main);
}

.navbar a {
  font-size: 2rem;
  margin: 0 1rem;
  color: var(--light-color);
}
.navbar a:hover {
  color: var(--main);
}

.icons div {
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  background: var(--light-bg);
  color: var(--black);
  cursor: pointer;
  text-align: center;
  margin-left: 0.3rem;
  flex-direction: row;
}
.icons div:hover {
  background: var(--black);
  color: var(--white);
}
#menu-btn {
  display: none;
}
.search-form {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%);
  width: 70rem;
  background: var(--white);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  display: none;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 0.2s linear;
}
.active {
  display: flex;
}

.search-form input {
  width: 90%;
  padding: 1.1rem 1.4rem;
  background: var(--light-bg);
  font-size: 1.6rem;
  color: var(--light-color);
}
.search-form label {
  font-size: 2.5rem;
  color: var(--black);
  cursor: pointer;
  margin: 0 1rem;
}
.search-form label:hover {
  color: var(--main);
}

.login-form {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%);
  width: 45rem;
  background: var(--white);
  box-shadow: var(--box-shadow);
  padding: 2rem;
  text-align: center;
  animation: fadeIn 0.2s linear;
  display: none;
}
.active {
  display: block;
}
.login-form .btn {
  width: 100%;
}
.login-form h3 {
  font-size: 2.5rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.login-form .box {
  width: 100%;
  padding: 1.3rem 1.4rem;
  background: var(--light-bg);
  font-size: 1.6rem;
  color: var(--light-color);
  margin: 0.7rem 0;
}
.login-form .flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
}
.login-form .flex label {
  font-size: 1.5rem;
  color: var(--light-color);
  cursor: pointer;
}
.login-form .flex a {
  font-size: 1.5rem;
  color: var(--light-color);
  margin-left: auto;
}
.login-form .flex a:hover {
  color: var(--main);
  text-decoration: underline;
}
.login-form p {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
  font-size: 1.5rem;
}
.login-form p a {
  color: var(--main);
}
.login-form p a:hover {
  text-decoration: underline;
}

@media (max-width: 991px) {
  .header #menu-btn {
    display: inline-block;
  }

  .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: var(--white);
    border-top: var(--border);
    border-bottom: var(--border);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  .navbar a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem;
    color: var(--white);
    background: var(--black);
    width: 20%;
    border-radius: 0.9rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .header .search-form {
    width: 90%;
  }
  .header .login-form {
    width: 90%;
  }
  input {
    width: 100%;
  }
}

@media (max-width: 352px) {
  .header .search-form {
    width: 90%;
  }
  .header .login-form {
    width: 90%;
  }
}

@media (max-width: 242px) {
  html {
    font-size: 25%;
  }
  .header {
    padding: 1rem 1.5rem;
  }
  .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: var(--white);
    border-top: var(--border);
    border-bottom: var(--border);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  .navbar a {
    display: block;
    margin: 1rem;
  }
}
</style>
