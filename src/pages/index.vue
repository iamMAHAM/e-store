<template>
  <Header />
  <div class="contact-info">
    <div
      id="close-contact-info"
      class="fas fa-times"
    ></div>
    <div class="info">
      <i class="fas fa-phone"></i>
      <h3>phone number</h3>
      <p>+225 000 000 000 1</p>
      <p>+225 000 000 000 1</p>
    </div>

    <div class="info">
      <i class="fas fa-envelope"></i>
      <h3>address email</h3>
      <p>e-store@estore.com</p>
      <p>info@estore.com</p>
    </div>

    <div class="info">
      <i class="fas fa-map-market-alt"></i>
      <h3>office address</h3>
      <p>Abidjan , Ivory cost , 225 jerusalem</p>
    </div>

    <div class="share">
      <a
        href=""
        class="fab fa-facebook"
      ></a>
      <a
        href=""
        class="fab fa-twitter"
      ></a>
      <a
        href=""
        class="fab fa-instagram"
      ></a>
      <a
        href=""
        class="fab fa-linkedin"
      ></a>
    </div>
  </div>
  <HomeList />
  <section
    class="services"
    id="services"
  >
    <h1 class="heading">Nos catégories</h1>
    <CategoryList />
  </section>
  <section
    class="arrivals"
    id="projects"
  >
    <h1 class="heading">Shop <span>New </span> Arrivage</h1>

    <ProductList />
    <NuxtLink
      to="/shop"
      class="btn"
      >Voir Plus</NuxtLink
    >
  </section>
</template>

<style scoped>
.box {
  cursor: pointer;
}

.box-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  padding-top: 8rem;
  padding-bottom: 10rem;
  padding-right: 2rem;
}

.video {
  width: 20px;
}
.content {
  flex: 1 1 41rem;
}
.content h3 {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
}
.content p {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
}
.content .pub {
  background: var(--main);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15rem;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.content .pub h3 {
  color: var(--white);
}
@keyframes example {
  0% {
    background-color: red;
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}

.content .pub .card {
  background: var(--white);
  height: 6rem;
  position: relative;
}

.content .pub .card a {
  color: red;
  font-size: 4rem;
  text-align: center;
}

.services {
  background: var(--light-bg);
}

.arrivals .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
}

.arrivals .box-container .box {
  display: grid;
  align-items: center;
  padding: 2rem;
  border: var(--border);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  gap: 2rem;
  background: var(--white);
}

.arrivals .box-container .box:hover .main-img {
  display: none;
}
.arrivals .box-container .box:hover .hover-img {
  display: inline-block;
}

.arrivals .box-container .box .image img {
  height: 10rem;
}
.hover-img {
  display: none;
  animation: fadIn 0.2s linear;
}

.arrivals .box-container .content h3 {
  font-size: 2rem;
  color: var(--black);
}
.arrivals .box-container .content .price {
  padding-top: 0.7rem;
  font-size: 2rem;
  color: var(--main);
}
.arrivals .box-container .content .price span {
  color: var(--light-color);
  font-size: 1.5rem;
  text-decoration: line-through;
}

.arrivals .box-container .box .content .starts {
  padding: 0.5rem;
  color: rgb(199, 179, 5);
  font-size: 0.5rem;
}

.contact-info {
  position: fixed;
  top: 0;
  right: 0;
  width: 34rem;
  background: var(--white);
  height: 100%;
  text-align: center;
  z-index: 1100;
  padding: 0 2rem;
  padding-top: 5rem;
  display: none;
}
.contact-info.active {
  box-shadow: 0 0 0 1000vh rgba(0, 0, 0, 0.7);
  display: block;
}
#close-contact-info {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 4rem;
  color: var(--black);
}
#close-contact-info:hover {
  transform: rotate(90deg);
}

.contact-info .info {
  padding: 2 rem 0;
}
.contact-info .info i {
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  background: var(--light-bg);
  color: var(--black);
  cursor: pointer;
  text-align: center;
  margin-bottom: 0.5rem;
}
.contact-info .info i:hover {
  background: var(--black);
  color: var(--white);
}
.contact-info h3 {
  font-size: 2rem;
  padding: 1rem 0;
}
.contact-info p {
  font-size: 1.5rem;
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
}
.share {
  padding-top: 1rem;
  border-top: var(--border);
  margin-top: 2rem;
}
.share a {
  height: 5rem;
  width: 5rem;
  line-height: 5rem;
  font-size: 2rem;
  background: var(--light-bg);
  color: var(--black);
  cursor: pointer;
  text-align: center;
  margin: 0 0.3rem;
}

.heading {
  margin-bottom: 3rem;
  padding-left: 1rem;
  border-left: 1rem solid var(--main);
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
  font-size: 3rem;
}

.about .row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
}

@media (max-width: 768px) {
  .pub {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .pub .h3 {
    font-size: 2rem;
  }
  .arrivals .box-container .box {
    flex-flow: column;
    text-align: center;
    gap: 2rem;
  }
  .content form .inputBox input {
    width: 100%;
  }
}

@media (max-width: 450px) {
  .newletter {
    text-align: center;
  }
  .newletter .content {
    font-size: 4rem;
  }
  .newletter .content p {
    font-size: 1.7rem;
  }
}

@media (max-width: 352px) {
  .arrivals .box-container .box {
    flex-flow: column;
    text-align: center;
    gap: 2rem;
  }
  .content form .inputBox input {
    width: 100%;
  }
}
</style>
