<template>
  <div class="kontägner">
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
  </div>
  <div class="till-betalning">
    <p><b>Totalkostnad:</b> {{ getCartTotal }}:-</p>
    <RouterLink to="/checkout">
      <button class="button-89" role="button">Till kassan</button>
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
.till-betalning {
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
}
.kontägner {
  width: 80%;
  padding-top: 100px;
}

.button-89 {
  --b: 3px; /* border thickness */
  --s: 0.45em; /* size of
the corner */
  --color: #373b44;
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
  touch-action: manipulation;
}
.button-89:hover,
.button-89:focus-visible {
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: 0.05em;
}
.button-89:active {
  background: var(--color);
  color: #fff;
}
</style>

<!-- HTML !-->
