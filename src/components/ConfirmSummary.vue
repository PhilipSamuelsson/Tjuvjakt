<template>
  <div class="sum">
    <img :src="productImg" class="confirmsummarybild" alt="..." />
    <h6 class="confirmsummaryh6">{{ productTitle }}</h6>
    <p class="confirmsummarypris">Pris {{ productPrice }}:-</p>
  </div>
  <!-- <div class="line"></div> -->
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
  /* width: clamp(20%, 46%, 70%);
    padding: 10px;
    margin: 10px; */
  height: 220px;
  width: calc((100% / 2) - 10px);
  margin-bottom: 20px;
}
.confirmsummarybild {
  /* max-width: 250px; */
  /* max-height: 147px; */
  width: 12em;
  height: 10em;
  object-fit: cover;
}
.confirmsummarypris {
  font-size: 0.8rem;
  margin: 0;
}
.confirmsummaryh6 {
  margin-top: 0;
  margin-bottom: 0.1rem;
  font-weight: 500;
  /* line-height: 2; */
  padding-right: 36%;
}
.container-info {
  margin: auto;
  height: auto;
  width: 620px;
  padding-bottom: 10px;
  box-shadow: 1px 1px 2px 2px rgb(228 228 228);
}
/* Three items in a row */
@media only screen and (min-width: 1000px) {
  .sum {
    width: calc((100% / 3) - 10px);
  }
}
@media only screen and (max-width: 700px) {
  .sum {
    width: calc((100%) - 10px);
  }
  .confirmsummaryh6 {
    padding-right: 0;
  }
}
</style>
