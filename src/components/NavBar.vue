<script setup>
import { RouterLink, RouterView } from "vue-router";
import FooterBar from "../components/FooterBar.vue";
import CartContainer from "../components/CartContainer.vue";
</script>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      someThingInCart: true,
    };
  },
  computed: {
    ...mapGetters(["getCartItemCount"]),
    displays(){
        return this.$store.state.cart
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <RouterLink to="/">
          <img
            class="img-logo"
            src="../assets/img/tjuvgods_logo.png"
            alt="Logo" /></RouterLink
      ></a>
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
              <RouterLink to="/about">Om Tjuvgods</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <RouterLink to="/checkout">Test checkout</RouterLink>
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-nav ml-auto">
        <a @click="$store.commit('toggleCart')" class="nav-link cart" href="#">
          <img class="Kassa" src="../assets/img/shopping-cart-icon-1.png" />
          <p class="cart-number" >{{ getCartItemCount }}</p>
        </a>
      </div>
    </div>

    <CartContainer v-if="$store.state.showCart" />
  </nav>
  <RouterView />
  <FooterBar />
</template>

<style scoped>
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

.cart{
    display: grid;
    grid-template-rows: 10px;
}
.cart-number{
    font-size: .7rem;
    height: 20px;
    width:20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    background-color: var(--primary-red);
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

@media (max-width: 990px) {
  .navbar-toggler {
    order: -1;
  }
  .img-logo {
    display: none;
  }
}
</style>
