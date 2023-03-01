<script>
import CartitemsContainer from "./CartitemsContainer.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    totalCost() {
      console.log(this.$store.commit("getCartTotal"));
      return this.$store.commit("getCartTotal");
    },
  },
  methods: {
    ...mapGetters(["getCartTotal"]),
  },
  components: {
    CartitemsContainer,
  },
};
</script>
<template>
  <div class="container">
    <h2 class="display-font">Varukorg</h2>

    <button @click="$store.commit('toggleCart')" class="close" >&times;</button>

    <div v-if="$store.state.cart.length === 0" class="no-products">
      <p>Du har inga stöldgods i varukorgen</p>
      <RouterLink
        @click="$store.commit('toggleCart')"
        class="kopKnapp link"
        to="/testproducts"
        >Handla istället</RouterLink
      >
    </div>
    <div class="cart-container">
      <CartitemsContainer />
    </div>
    <!-- <p v-if="$store.state.cart.length === 0">
      Du har inga stöldgods i varukorgen
    </p> -->
    <div v-if="$store.state.cart.length" class="to-checkout-container">
      <div class="total-cost-container">
        <p>Totalt :</p>
        <p>CASH KR</p>
      </div>
      <button class="kopKnapp" role="button">Till kassan</button>
    </div>
  </div>
</template>

<style scoped>
.close {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 20px;
  background: none;
  border: none;
  font-size: 40px;
}
.container {
  box-shadow: var(--shadow);
  width: 375px;
  /*    OBS! HARD CODED HEIGHT FOR TESTING */
  height: 600px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 99;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.cart-item-holder {
  width: 500px;
  height: 400px;
  background-color: yellow;
  z-index: 100;
}




.cart-container {
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
}

.no-products {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.total-cost-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.link {
  text-decoration: none;
  color: #000000;

}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>
