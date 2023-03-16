<template>
  <h2>Översikt</h2>
  <div v-if="!getCartTotal" class="optional-message">
    <p>Hoppsan! Tomt i varukorgen, fick du kalla fötter? Köp lite skor... </p>
    <RouterLink to="/products" class="action-btn">Handla...?</RouterLink>
  </div>

<!-- EN KOLUMN -->
  <!-- <div class="container" style=" display: flex; flex-wrap: wrap; justify-content:space-between;">
  <div class="kontägner"  style=" display:flex; flex-direction:column; width:50%; padding:10px;"
> -->
<!-- TVÅ KOLUMN -->
<div class="container">
  <div class="kontägner" style=" display: grid;   grid-template-columns: repeat(2,1fr);"
>
  <!-- <div class="kontägner"> -->
    <SummaryItems
      v-for="cartItem in cartList"
      :key="cartItem.id"
      :id="cartItem.id"
      :title="cartItem.title"
      :image="cartItem.image"
      :category="cartItem.category"
      :price="cartItem.price"
      :stock="cartItem.quantity"
      :numberOfProducts="cartItem.numberOfItem"
      :product="cartItem"
      :beskrivning="cartItem.description"
    />
  </div></div>
  <div class="till-betalning">
    <p v-if="cartList.length"><b>Totalkostnad:</b> {{ getCartTotal }}:-</p>
    <RouterLink to="/checkout">
      <button class="action-btn" role="button"  v-if="cartList.length" >Till betalning</button>
    </RouterLink>
  </div>
</template>

<script>
import SummaryItems from "../components/SummaryItems.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCartTotal"]),
  },

  components: {
    SummaryItems,
  },

  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.cartList = this.$store.state.cart;
    },
  },
  data() {
    return {
      cartList: [],
    };
  },
};
</script>

<style scoped>

h2 {
  text-align: center;
  font-size: 2.5rem;
  padding-top: 3em;
  padding-bottom: 2em;
  font-weight: 700;
}
.till-betalning {
  padding-left: 50%;
  margin-top: 30px;
}
.container{
  width: 100%;
}
.kontägner {
  width: 80%;
}
@media (max-width: 350px){
  .till-betalning{
  position: relative;
right: 22%;
}
.till-betalning p{
  font-size: 15px;
}
}
@media (min-width: 375px){
  .till-betalning {
position: relative;
    right: 15%;}
}
@media (min-width: 950px) {
  .kontägner {
    width: 50%;
  }
  .till-betalning {
    /* position: absolute; */
    position: relative;
    top: 60%;
    right: 5%;
    /* padding-right: 15vw;
    bottom: 10px; */
  }
}

.optional-message{
    text-align: center;
}
/* .button-89 { */
 /*  --b: 3px; */ /* border thickness */
 /*  --s: 0.45em; */ /* size of
the corner */
/*   --color: #373b44;
  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation; */
/* } */
/* .button-89:hover, */
/* .button-89:focus-visible {
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: 0.05em;
} */
/* .button-89:active {
  background: var(--color);
  color: #fff;
} */
.button-89 {
  border: 3px solid #000000;
    text-align: center;
    background: transparent;
    font-family: Outfit, sans-serif;
    font-weight: 900;
    padding: 0.5em 1em;
}
</style>

<!-- HTML !-->
