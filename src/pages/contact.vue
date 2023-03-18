<template>
  <!-- section info-contact start !-->
  <section class="info-contact">
    <div class="box-container">
      <div class="box">
        <i class="fas fa-map"></i>
        <h3>adresse</h3>
        <p>Yopougon , jerusalem</p>
      </div>

      <div class="box">
        <i class="fas fa-phone"></i>
        <h3>numero</h3>
        <p>+225 000 000 000 1</p>
        <p>+225 000 000 000 1</p>
      </div>

      <div class="box">
        <i class="fas fa-envelope"></i>
        <h3>email</h3>
        <p>e-store@test.com</p>
        <p>ctest@name.com</p>
      </div>
    </div>
  </section>

  <!-- section info-contact end !-->

  <!-- section contact start !-->

  <section class="contact">
    <form
      action=""
      id="formua"
    >
      <h3>ENTRER EN CONTACT</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        animi tempora quibusdam facere impedit maxime rerum enim iste amet?
        Quia!
      </p>

      <div class="inputBox">
        <input
          type="text"
          name="nom"
          id="nom"
          placeholder="Entrer votre nom"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Entrer votre adresse email"
          required
        />
      </div>
      <div class="inputBox">
        <input
          type="number"
          name="numero"
          id="numero"
          placeholder="Entrer votre numero telephone"
          required
        />
        <input
          type="text"
          name="sub"
          id="sub"
          placeholder="votre subjections"
          required
        />
      </div>
      <textarea
        name="textarea"
        placeholder="votre message"
        id="textFormulaire"
        cols="30"
        rows="10"
        required
      ></textarea>
      <input
        type="submit"
        value="Envoyer"
        class="btn"
        id="boutton"
      />
    </form>

    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7110221497474!2d-4.049026834554559!3d5.307708746149592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea3d2b9ff701%3A0x10fc9ef001f5785d!2sYopougon-Sant%C3%A9%2C%20Abidjan!5e0!3m2!1sen!2sci!4v1676972961729!5m2!1sen!2sci"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>

  <!-- section contact end !-->

  <!-- section Newletter  start !-->

  <section class="newletter">
    <div class="content">
      <h3>Newletter</h3>
      <p>abonnez-vous à la semaine Information</p>
    </div>

    <form
      action=""
      id="formD"
    >
      <input
        type="email"
        name="emailD"
        id="emailD"
        class="email"
        required
      />
      <input
        type="submit"
        value="Envoyer"
        placeholder="Entrer votre email"
        class="btn"
        id="buttonD"
      />
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.info-contact .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
}
.info-contact .box-container .box {
  background: var(--white);
  border: var(--border);
  box-shadow: var(--box-shadow);
  text-align: center;
  padding: 2rem;
}
.info-contact .box-container .box i {
  height: 7.5rem;
  width: 7.5rem;
  line-height: 7.5rem;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  background: var(--main);
  color: var(--white);
}
.info-contact .box-container .box h3 {
  font-size: 2rem;
  padding: 0.5rem 0;
  color: var(--black);
}
.info-contact .box-container .box p {
  font-size: 1.5rem;
  line-height: 2;
  color: var(--light-color);
}

.contact {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact form {
  flex: 1 1 42rem;
}

.contact input,
textarea {
  padding: 1.2rem 1.4rem;
  border: var(--border);
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  background: var(--white);
  font-size: 1.7rem;
  margin: 0.7rem 0;
  text-decoration: none;
  color: var(--light-color);
}
.contact textarea {
  height: 16rem;
  width: 100%;
  resize: none;
}

.contact .map {
  flex: 1 1 42rem;
  width: 100%;
}
.contact form h3 {
  color: var(--black);
  font-size: 3rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.contact form p {
  color: var(--light-color);
  font-size: 1.5rem;
  line-height: 2;
  padding: 0.5rem;
}
.contact form .inputBox {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.contact form .inputBox input {
  width: 49%;
  border: var(--border);
  background: white;
}

.newletter {
  background: var(--main);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}
.newletter .content {
  flex: 1 1 42rem;
}
.newletter .content h3 {
  color: var(--white);
  text-transform: uppercase;
  font-size: 6rem;
}
.newletter .content p {
  font-size: 2.2rem;
  color: var(--white);
}
.newletter form {
  flex: 1 1 42rem;
  background: var(--white);
  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.newletter form .email {
  width: 100%;
  padding: 0 1.4rem;
  text-transform: none;
  color: var(--light-color);
}

.newletter form .btn {
  margin-top: 0;
  border-radius: 0.5rem;
}
</style>
