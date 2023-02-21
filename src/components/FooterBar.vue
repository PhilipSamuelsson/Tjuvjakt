<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <h4 class="footer-header">Quick Links</h4>
    <div class="footer-links">
      <RouterLink to="#">Terms of Service</RouterLink>
      <RouterLink to="#">privacy Policies</RouterLink>
      <RouterLink to="#">(No) Refund Policy</RouterLink>
      <RouterLink to="#">(No) Contact Policy</RouterLink>
    </div>
    <div class="footer-icon">
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <i class="fa fa-reddit" aria-hidden="true"></i>
      <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
      <i class="fa fa-paypal" aria-hidden="true"></i>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
}
</style>
