<script setup>
// import { RouterLink } from "vue-router";
// import { ref } from "vue";

// const showVillkor = ref(false);
// const showKontakt = ref(false);
</script>

<template>
  <footer class="footerbar">
    <div class="footer-info">
        <h4 class="footer-header">Följ oss gärna så följer vi tillbaka, så att vi får ha koll på ditt privatliv. </h4>
    </div>
    <!-- <div class="footer-links">
      <div class="desktop-footer">
        <p>Terms of Service</p>
        <p>Privacy</p>
        <p>(no) Refund Policy</p>
        <p>(no) Contact Policy</p>
      </div>
      <div class="mobile" @click="showVillkor = !showVillkor">
        <p>Villkor</p>
        <i
          class="fa-solid"
          v-bind:class="{ 'fa-plus': !showVillkor, 'fa-minus': showVillkor }"
        ></i>
      </div>
      <div class="villkor" v-show="showVillkor">
        <RouterLink
          to="#"
          v-bind:style="{ display: showVillkor ? 'block' : 'none' }"
          >Terms of Service</RouterLink
        >
        <RouterLink
          to="#"
          v-bind:style="{ display: showVillkor ? 'block' : 'none' }"
          >Privacy Policies</RouterLink
        >
      </div>
      <div class="mobile" @click="showKontakt = !showKontakt">
        <p>Kontakt</p>
        <i
          class="fa-solid"
          v-bind:class="{ 'fa-plus': !showKontakt, 'fa-minus': showKontakt }"
        ></i>
      </div>
      <div class="kontakt" v-show="showKontakt">
        <RouterLink
          to="#"
          v-bind:style="{ display: showKontakt ? 'block' : 'none' }"
          >(No) Refund Policy</RouterLink
        >
        <RouterLink
          to="#"
          v-bind:style="{ display: showKontakt ? 'block' : 'none' }"
          >(No) Contact Policy</RouterLink
        >
      </div>
    </div> -->
    <div class="footer-icon">
      <a target="_blank" href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
      <a target="_blank" href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
      <a target="_blank" href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
      <a target="_blank" href="https://www.snapchat.com/"><i class="fa-brands fa-snapchat"></i></a>
      <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
      <a target="_blank" href="https://www.twitch.tv/"><i class="fa-brands fa-twitch"></i></a>
    </div>
    <div class="complaint-container">
        <RouterLink class="customer-complaint-link" to="/custom-support">Reklamation</RouterLink>
    </div>
  </footer>
</template>

<style scoped>
.footerbar {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  /* position: absolute;
  bottom: 0; */
  /* width: 98vw; */
  /* border-top: 2px solid black; */
  /* padding: auto 20px; */
  margin-top: 17vh;
  margin-bottom: 5rem;
}

.desktop-footer {
  display: flex;
  display: none;
}

.desktop-footer p {
  display: flex;
  margin: 20px;
}

.mobile {
  display: none;
}

.footer-header {
    margin: 1rem;
    padding-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  justify-content: center;
}

.villkor,
.kontakt {
  margin: 30px auto;
}

.footer-links .villkor a,
.kontakt a {
  display: block;
  margin: auto 25px;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  text-align: center;
}

.footer-icon {
    width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 800px;
}

.footer-icon * {
  /* margin: 12px 25px 10px; */
  font-size: 2rem;
  color: var(--black);
}

.complaint-container{
    margin: 1rem 0 .5rem 0;
}
.customer-complaint-link{
    text-align: center;
    text-decoration: none;
    color: rgba(0,0,0,.5);
}

/*
@media (max-width: 949px) {
  .footer-header {
    display: none;
  }

  .footer-links {
    flex-direction: column;
  }

  .mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 15vw;
  }

  .footer-links a {
    display: none;
  }

  .mobile * {
    font-size: 24px;
    font-weight: bold;
    align-self: center;
    padding: 0.2rem;
  }
  .desktop-footer {
    display: none;
  }
}

*/
</style>
