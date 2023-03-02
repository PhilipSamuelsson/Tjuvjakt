<template>
  <!-- <div class="cart-wrapper">

  </div> -->
  <div class="container">
    <div class="top-title-container">
      <h2 class="top-title">Varukorgen</h2>
      <button @click="$store.commit('toggleCart')" class="close">
        &times;
      </button>
    </div>
    <div class="cart-container">
      <CartitemsContainer />
    </div>
    <div v-if="$store.state.cart.length === 0" class="to-checkout-container">
      <p>Du har inga stöldgods i varukorgen</p>
      <RouterLink
        @click="$store.commit('toggleCart')"
        class="action-btn link"
        to="/testproducts"
        >Handla istället
      </RouterLink>
    </div>
    <div v-if="$store.state.cart.length" class="to-checkout-container">
      <div class="total-cost-container">
        <p>Totalt :</p>

        <p>{{ getCartTotal }} KR</p>
      </div>
      <button class="action-btn" role="button">Till kassan</button>
    </div>
  </div>
</template>

<script>
import CartitemsContainer from "./CartitemsContainer.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCartTotal"]),
  },
  components: {
    CartitemsContainer,
  },
};
</script>

<style scoped>
.cart-wrapper {
  top: 0.1rem;
  width: 100vw;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
}

.close {
  margin-right: 1rem;
  background: none;
  border: none;
  font-size: 40px;
  padding-bottom: 1rem;
}

.container {
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 560px;
  width: 100%;
  max-width: 300px;
  position: absolute;
  /* grid-column: 2; */
  box-shadow: var(--shadow);
  background-color: white;
  z-index: 99;
}

/* @media(min-width:768px){
    .container{
        background-color: red;
        grid-column: 2;
    }
    .cart-wrapper{
        grid-template-columns: 1fr 1fr;
    }
} */

@media (min-width: 990px) {
  .container {
    /* grid-column: 4; */
  }

  .cart-wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.top-title-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
}

.top-title {
  font-weight: 900;
  font-family: "Turret Road", cursive;
  font-size: 1.2rem;
}

.action-btn {
  border: 3px solid #000000;
  text-align: center;
  background: transparent;
  font-family: Outfit, sans-serif;
  font-weight: 900;
}

.cart-container {
  width: 100%;
  height: 280px;
  overflow-y: scroll;
}

.to-checkout-container {
  width: 100%;
  display: grid;
  margin-bottom: 2rem;
}

.total-cost-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  margin: 1rem 0;
}

.link {
  margin-top: 1rem;
  text-decoration: none;
  color: #000000;
}
</style>
