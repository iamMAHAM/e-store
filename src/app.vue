<template>
  <Link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<style>
@import url('http://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

:root {
  --main: #e8b90d;
  --black: #111;
  --white: #fff;
  --light-color: #666;
  --light-white: #fff9;
  --dark-bg: rgba(0, 0, 0, 0.7);
  --light-bg: #eee;
  --border: 0.1rem solid var(--black);
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  --text-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.3);
}

* {
  font-family: 'Poppins', sans-serif;
  border: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  transition: all 0.2s linear;
}

html {
  font-size: 62.5%;
  /*  overflow: hidden;*/
  scroll-behavior: smooth;
  scroll-padding-top: 7rem;
}
html::-webkit-scrollbar {
  width: 1rem;
}

html::-webkit-scrollbar-track {
  background: transparent;
}

html::-webkit-scrollbar-thumb {
  background: var(--main);
}

section {
  padding: 5rem 10%;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 3rem;
  background: var(--black);
  color: var(--white);
  cursor: pointer;
  font-size: 1.7rem;
  text-transform: capitalize;
}

.btn:hover {
  background: var(--main);
  color: var(--white);
}

@media (max-width: 1200px) {
  .header {
    padding: 1.5rem 2rem;
  }
  section {
    padding: 3rem 5%;
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  section {
    padding: 3rem 2rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 352px) {
  html {
    font-size: 40%;
  }
}

@media (max-width: 242px) {
  html {
    font-size: 25%;
  }
}
</style>
