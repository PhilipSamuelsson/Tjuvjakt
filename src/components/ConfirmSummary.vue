<template>
  <div class="sum">
    <div class="flex-column">
      <h4>{{ productTitle }}</h4>
      <img :src="productImg" class="img-fluid" alt="..." />
      <p>Pris {{ productPrice }}:-</p>
    </div>
  </div>

  <div class="line"></div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    remove() {
      this.removeFromCart(this.productId);
    },
    increment() {
      this.numberOfItem++;
      this.addMore(this.cartItem);
    },
    decrement() {
      if (this.getCartItemCount > 1) {
        this.numberOfItem--;
        this.removeItemFromCart(this.cartItem);
      } else {
        this.remove();
      }
    },

    ...mapMutations([]),
  },

  computed: {
    ...mapGetters(["getCartItemCount"]),
  },
  data() {
    return {
      productTotalPrice: 0,
      productId: this.id,
      productTitle: this.title,
      productImg: this.image,
      productCategory: this.category,
      productPrice: this.price,
      inStock: this.stock,
      cartItem: this.product,
      numberOfItem: 1,
      beskr: this.beskrivning,
      lorem:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      antal: this.numberOfProducts,
    };
  },
  props: {
    beskrivning: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    numberOfProducts: {
      type: Number,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.sum {
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 100%;
  flex-direction: row;
}
.flex-container {
}
img {
  width: 30%;
  height: 30%;
}
</style>
