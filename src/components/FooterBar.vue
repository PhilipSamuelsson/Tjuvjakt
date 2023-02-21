<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footerbar">
    <h4 class="footer-header">Quick Links</h4>
    <div class="footer-links">
      <RouterLink to="#">Terms of Service</RouterLink>
      <RouterLink to="#">Privacy Policies</RouterLink>
      <RouterLink to="#">(No) Refund Policy</RouterLink>
      <RouterLink to="#">(No) Contact Policy</RouterLink>
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
  position: absolute;
  bottom: 0;
  width: 100vw;
  /* border-top: 2px solid black; */
  padding: auto 20px;
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

.footer-links * {
  margin: 20px 55px 10px;
  font-size: 24px;
  text-decoration: none;
  color: black;
}

.footer-icon {
  display: flex;
  justify-content: center;
}

.footer-icon * {
  margin: 12px 25px 10px;
  font-size: 2em;
}
</style>
