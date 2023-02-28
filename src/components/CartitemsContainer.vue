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

export default {
  components: {
    CartItem,
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
      cartList: {},
    };
  },
};
</script>
<style scoped></style>
