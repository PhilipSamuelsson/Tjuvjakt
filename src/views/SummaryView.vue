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
    <p>TotalKostnad: {{   getCartTotal }}:-</p>

<button>Till betalning</button>
</div>
</template>

<script>
import SummaryItems from '../components/SummaryItems.vue'
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

}</style>
