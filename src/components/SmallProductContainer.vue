<template>
  <div class="products-wrapper">
    <div class="products-container">
      <ProductItem
        @click="sendId(product.id)"
        class="product-item"
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :price="product.price"
        :title="product.title"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
export default {
  beforeUpdate() {
    this.fetchProducts();
  },

  components: {
    ProductItem,
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.products = await this.similarProducts;
    },
    sendId(id) {
      this.$emit("idFromSmallProduct", id);
    },
  },
  data() {
    return {
      products: [],
    };
  },
  props: {
    similarProducts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-item {
  cursor: pointer;
  min-width: 180px;
}

.products-wrapper {
  min-width: 100px;
  min-height: 200px;
}

.products-container {
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
}
</style>
