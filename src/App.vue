<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <main>
    <RouterView />
    <FooterBar class="footerbar" />
  </main>
</template>

<style scoped>
main {
  height: auto;
}
</style>
