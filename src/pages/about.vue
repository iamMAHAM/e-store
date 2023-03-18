<template>
  <Header />
  <section
    class="about"
    id="about"
  >
    <h1 class="heading">A propos</h1>

    <div class="row">
      <div class="image">
        <img
          src="images/boutique.jpg"
          alt=""
        />
      </div>

      <div class="content">
        <h3>Description de la Boutique's <span>COL</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa
          eaque nesciunt, vitae ipsam expedita dolor in illo quidem suscipit
          esse impedit, perferendis eius, recusandae voluptate ea ratione
          necessitatibus labore iure. Quasi tenetur est, voluptatem
          reprehenderit esse dolorum culpa fugiat quis illo tempore, fugit iste?
          Libero dolor dicta, laborum autem nostrum, quidem quas,
        </p>
        <p>
          quam odio deserunt voluptatibus cumque rerum quae illum architecto
          aspernatur? Reprehenderit necessitatibus laborum delectus deserunt
          doloremque accusantium quia ipsam debitis consequatur ratione eveniet
          esse tempora sit, quis a impedit et aperiam ex! Harum quam natus ullam
          provident iure corrupti voluptas dolore, quia
          <a href=""> error voluptates alias sapiente a</a>.
        </p>

        <a
          href="video/boutique"
          class="btn"
          >regarder</a
        >
      </div>
    </div>
  </section>

  <!-- section about  end !-->

  <!-- section Question  start !-->

  <section class="faq">
    <h1 class="heading">question & <span>reponse</span></h1>

    <div
      class="first_container"
      id="faq"
    >
      <div
        class="first"
        id="faq"
      >
        <div class="first_heading">
          <h3>comment faire des achats?</h3>
          <i class="fas fa-angle-down"></i>
        </div>
        <p class="first-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          sapiente dolor minus ullam modi consectetur impedit voluptate,
          assumenda qui doloremque deserunt autem inventore laudantium a fuga
          voluptates odit reiciendis iure.
        </p>
      </div>

      <div class="first">
        <div class="first_heading">
          <h3>comment voir ou selectionner ces favories?</h3>
          <i class="fas fa-angle-down"></i>
        </div>
        <p class="first-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          sapiente dolor minus ullam modi consectetur impedit voluptate,
          assumenda qui doloremque deserunt autem inventore laudantium a fuga
          voluptates odit reiciendis iure.
        </p>
      </div>

      <div class="first">
        <div class="first_heading">
          <h3>comment creer un compte?</h3>
          <i class="fas fa-angle-down"></i>
        </div>
        <p class="first-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          sapiente dolor minus ullam modi consectetur impedit voluptate,
          assumenda qui doloremque deserunt autem inventore laudantium a fuga
          voluptates odit reiciendis iure.
        </p>
      </div>

      <div class="first">
        <div class="first_heading">
          <h3>comment contactez la boutique?</h3>
          <i class="fas fa-angle-down"></i>
        </div>
        <p class="first-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          sapiente dolor minus ullam modi consectetur impedit voluptate,
          assumenda qui doloremque deserunt autem inventore laudantium a fuga
          voluptates odit reiciendis iure.
        </p>
      </div>

      <div class="first">
        <div class="first_heading">
          <h3>comment effectuer le paiement?</h3>
          <i class="fas fa-angle-down"></i>
        </div>
        <p class="first-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          sapiente dolor minus ullam modi consectetur impedit voluptate,
          assumenda qui doloremque deserunt autem inventore laudantium a fuga
          voluptates odit reiciendis iure.
        </p>
      </div>
    </div>
  </section>

  <!-- section Question  end !-->

  <!-- section review start!-->

  <section class="reviews">
    <h1 class="heading">commantaire <span>client's</span></h1>

    <div class="swiper review-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide">
          <img
            src="images/slide-1.webp"
            alt=""
          />
          <h3>Kabore</h3>
          <span>Informaticien</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vitae
            quasi quidem, ratione eos ducimus esse deleniti. Voluptatibus,
            aliquam facere.
          </p>
        </div>

        <div class="swiper-slide slide">
          <img
            src="images/slide-1.webp"
            alt=""
          />
          <h3>Kabore</h3>
          <span>Informaticien</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            accusamus ut consequuntur soluta animi et ex recusandae, aliquid
            harum delectus iusto laudantium ipsam illo optio. Iure nisi nostrum
            ab accusantium!
          </p>
        </div>

        <div class="swiper-slide slide">
          <img
            src="images/slide-1.webp"
            alt=""
          />
          <h3>Kabore</h3>
          <span>Informaticien</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eos!
          </p>
        </div>

        <div class="swiper-slide slide">
          <img
            src="images/slide-1.webp"
            alt=""
          />
          <h3>Kabore</h3>
          <span>Informaticien</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            veritatis earum libero odio, quidem asperiores. Dolor natus
            molestias inventore temporibus!
          </p>
        </div>

        <div class="swiper-slide slide">
          <img
            src="images/slide-1.webp"
            alt=""
          />
          <h3>Kabore</h3>
          <span>Informaticien</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            dolorem temporibus veniam, fugit ipsam incidunt non nostrum eaque
            doloribus voluptatum odit consequuntur mollitia, reiciendis
            blanditiis eveniet distinctio! Laborum, inventore sunt!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about .row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.image {
  flex: 1 1 42rem;
}
.image img {
  width: 100%;
}

.about .content {
  flex: 1 1 42rem;
  padding: 3rem;
  background: var(--white);
}
.about .content h3 {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
  font-size: 2.5rem;
}
.about .content h3 span {
  color: var(--main);
}
.about .content p {
  color: var(--black);
  text-transform: capitalize;
  line-height: 1.5;
  font-size: 1.3rem;
  padding: 1rem 0;
}

.faq .first_container {
  max-width: 70rem;
  margin: 0 auto;
}
.faq .first_container .first {
  background: var(--white);
  margin-bottom: 1.5rem;
  box-shadow: var(--box-shadow);
}
.faq .first_container .first:last-child {
  margin-bottom: 0.5rem;
}
.first_heading.active {
  background: var(--main);
}
.active .first_heading i {
  transform: rotate(180deg);
}

.first.active {
  display: block;
}

.faq .first_container .first.active .first-content {
  display: block;
}

.faq .first_container .first .first_heading {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  justify-content: space-between;
  background: var(--black);
  cursor: pointer;
}
.faq .first_container .first .first_heading h3 {
  font-size: 2rem;
  color: var(--main);
}

.faq .first_container .first .first_heading i {
  font-size: 2rem;
  color: var(--white);
}
.faq .first_container .first .first-content {
  padding: 1.5rem;
  font-size: 1.5rem;
  line-height: 2;
  color: var(--light-color);
  display: none;
  animation: fadeIn 0.2s linear;
}

.reviews .slide {
  width: 35rem;
  padding: 2rem;
  text-align: center;
  border: var(--border);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
}

.reviews .slide img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.reviews .slide h3 {
  font-size: 2.5rem;
  padding: 0.5rem 0;
  color: var(--black);
}

.reviews .slide span {
  color: var(--main);
  font-size: 1.5rem;
}

.reviews .slide p {
  color: var(--light-color);
  line-height: 2;
  font-size: 1.5rem;
  padding-top: 0.5rem;
}
</style>
