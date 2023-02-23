<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterBar from "../components/FooterBar.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="img-logo" src="../assets/img/tjuvgods_logo.png" alt="Logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/">Hem</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/testproducts">Produkt</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/profile">Mitt konto</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/checkout">
                <img
                  class="Kassa"
                  src="../assets/img/shopping-cart-icon-1.png"
                />
              </RouterLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <FooterBar />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap");

nav[class="navbar navbar-expand-lg bg-body-tertiary"] {
  font-family: "Outfit", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

nav {
  background-color: white;
  height: 60px;
  width: 100%;
  z-index: 10;
}

nav ul li {
  display: inline-block;
  margin: 0 20px;
}

nav ul li a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

nav ul li a:hover {
  color: black;
}

.img-logo {
  height: 25px;
  width: 147px;
}

.Kassa {
  height: 28px;
  width: 39px;
}

@media screen and (min-width: 375px) and (max-width: 980px) {
  nav ul {
    background-color: white;
    /* height: 100%; */
    height: 100vh;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
  }

  .img-logo {
    width: 90px;
  }
}
</style>
