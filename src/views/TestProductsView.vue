<template>
  <div class="products-wrapper">
    <div class="products-container">
      <!-- @click="sendId(product.id)" -->
      <TestProductItem class="product-item" v-for="product in products" :key="product.id"
        @click="selectProduct(product.id)" :image="product.image" :price="product.price" :title="product.title" />
    </div>
  </div>
</template>

<style>
.product-item {
  cursor: pointer;
}

.products-wrapper {
  background-color: white;
  padding-top: 8rem;
}

.products-container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 375px) {
  .products-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 500px) {
  .products-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .products-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .products-container {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>

<script>
import TestProductItem from "../components/TestProductItem.vue";
import axios from "axios";
export default {
  components: {
    TestProductItem,
  },
  mounted() {
    this.fetchProducts();
  },
  // emits: ["produkt-vald"],
  methods: {
    selectProduct(id) {
      // const valdProdukt = this.products.find(product => product.id == id)
      // console.log(valdProdukt.title)
      // console.log(id); name: 'productdetail' Voalr föreslåt detta "name: ProductDetailView" props: { productData: this.products }
      // this.$emit("produkt-vald", { id, productData: valdProdukt });
      this.$router.push({
        name: 'productdetail',
        params: { productID: id }
      })
    },
    async fetchProducts() {
      const result = await axios.get("productapi.json", {
        headers: {
          Accept: "application/json",
        },
      });
      this.products = result.data;
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
