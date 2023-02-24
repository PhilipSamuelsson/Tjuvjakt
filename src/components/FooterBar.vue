<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const showVillkor = ref(false);
const showKontakt = ref(false);
</script>

<template>
  <footer class="footerbar">
    <h4 class="footer-header">Quick Links</h4>
    <div class="footer-links">
      <div class="mobile" @click="showVillkor = !showVillkor">
        <p>Villkor</p>
        <i class="fa-solid" v-bind:class="{ 'fa-plus': !showVillkor, 'fa-minus': showVillkor }"></i>
        <!-- <i class="fa-solid fa-minus/plus" id="togglare"></i> -->
      </div>
      <div class="villkor" v-show="showVillkor">
        <RouterLink to="#" v-bind:style="{ display: showVillkor ? 'block' : 'none' }">Terms of Service</RouterLink>
        <RouterLink to="#" v-bind:style="{ display: showVillkor ? 'block' : 'none' }">Privacy Policies</RouterLink>
      </div>
      <div class="mobile" @click="showKontakt = !showKontakt">
        <p>Kontakt</p>
        <i class="fa-solid" v-bind:class="{ 'fa-plus': !showKontakt, 'fa-minus': showKontakt }"></i>
      </div>
      <div class="kontakt" v-show="showKontakt">
        <RouterLink to="#" v-bind:style="{ display: showKontakt ? 'block' : 'none' }">(No) Refund Policy</RouterLink>
        <RouterLink to="#" v-bind:style="{ display: showKontakt ? 'block' : 'none' }">(No) Contact Policy</RouterLink>
      </div>
    </div>
    <div class="footer-icon">
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-tiktok"></i>
      <i class="fa-brands fa-snapchat"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitch"></i>
    </div>
  </footer>
</template>

<style scoped>
.footerbar {
  /* position: absolute;
  bottom: 0; */
  width: 98vw;
  /* border-top: 2px solid black; */
  padding: auto 20px;
  margin-top: 17vh;
}

.mobile {
  display: none;
}

.footer-header {
  margin: 5px auto;
  text-align: center;
  font-size: 24px;
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
  display: flex;
  justify-content: center;
}

.footer-icon * {
  margin: 12px 25px 10px;
  font-size: 2em;
}

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
    /* align-items: center; */
  }

  .footer-links a {
    display: none;
  }

  .mobile * {
    font-size: 24px;
    font-weight: bold;
    align-self: center;
    padding: .2rem;
  }

  /* .mobile i {
    align-self: center;
  } */

  /* .footer-links .mobile i.fa-solid.fa-minus {
    display: none;
  } */

}
</style>
