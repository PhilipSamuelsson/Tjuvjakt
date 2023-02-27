<template>
  <CartItem
    v-for="cartItem in cartList"
    :key="cartItem.id"
    :id="cartItem.id"
    :title="cartItem.title"
    :image="cartItem.image"
    :category="cartItem.category"
    :price="cartItem.price"
    :stock="cartItem.quantity"
  />
</template>

<script>
import CartItem from "../components/CartItem.vue";
import axios from "axios";

export default {
  components: {
    CartItem,
  },
  mounted() {
    this.fetchCartItems();
  },
  methods: {
    async fetchCartItems() {
      const result = await axios.get("productapi.json", {
        headers: {
          Accept: "application/json",
        },
      });
      this.cartList = result.data;
    },
    idFromCart() {
      // for(let i =0; this.$store.cart)
    },
  },
  data() {
    return {
      cartList: {},
      testList: [2, 5, 6],
    };
  },
};
</script>
<style scoped></style>
