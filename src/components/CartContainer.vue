<template>
  <div class="cart-wrapper">
    <div class="container">
      <div class="top-title-container">
        <h2 class="top-title">Varukorgen</h2>
        <button @click="$store.commit('toggleCart')" class="close">
        &times;
      </button>
      </div>

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

      <div v-if="$store.state.cart.length" class="to-checkout-container">
        <div class="total-cost-container">
          <p>Totalt :</p>

          <p>{{ getCartTotal }} KR</p>
        </div>
        <button class="kopKnapp checkout-btn" role="button">Till kassan</button>
      </div>
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
    top: .1rem;
    width: 100vw;
    position: absolute;
  display: grid;
  grid-template-columns: 1fr;
}


.close {
  background: none;
  border: none;
  font-size: 40px;
  padding-bottom: 1rem;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin-left: -1rem; */
    min-height: 500px;
    width: 100%;
    min-width: 300px;
    max-width: 200px;
    position: relative;
  grid-column: 2;
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

@media(min-width:990px){
    .container{
        grid-column: 4;
    }
    .cart-wrapper{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

.top-title-container {
    display: flex;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid #000000;
}

.top-title{
    font-weight: 900;
    font-family: 'Turret Road', cursive;
    font-size: 1.2rem;
}

.cart-container {
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
}

.no-products,
.to-checkout-container {
    display: grid;
}

.total-cost-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  margin: 1rem 0;
}

.checkout-btn{
    margin-bottom: 2rem;
}

.no-products p{
    text-align: center;
}
.link {
    margin-top: 1rem;
  text-decoration: none;
  color: #000000;
}
</style>
