<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footerbar">
    <h4 class="footer-header">Quick Links</h4>
    <div class="footer-links">
      <div class="mobile">
        <p>Villkor</p>
        <i class="fa-solid fa-plus" id="togglare"></i>
        <i class="fa-solid fa-minus" id="togglare"></i>
      </div>
      <div class="villkor">
        <RouterLink to="#">Terms of Service</RouterLink>
        <RouterLink to="#">Privacy Policies</RouterLink>
      </div>
      <div class="mobile">
        <p>Kontakt</p>
        <i class="fa-solid fa-plus" id="togglare"></i>
        <i class="fa-solid fa-minus" id="togglare"></i>
      </div>
      <div class="kontakt">
        <RouterLink to="#">(No) Refund Policy</RouterLink>
        <RouterLink to="#">(No) Contact Policy</RouterLink>
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

<script></script>

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

  .footer-links .mobile i.fa-solid.fa-minus {
    display: none;
  }

}
</style>
