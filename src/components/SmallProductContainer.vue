<template>
  <div class="products-wrapper">
    <div class="products-container">
      <!-- @click="sendId(product.id)" -->
      <TestProductItem
        class="product-item"
        v-for="product in products"
        :key="product.id"
        @click="selectProduct(product.id)"
        :image="product.image"
        :price="product.price"
        :title="product.title"
      />
    </div>
  </div>
</template>

<script>
import TestProductItem from "../components/TestProductItem.vue";
// import axios from "axios";
export default {
  components: {
    TestProductItem,
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
        console.log('körs')
      this.products = await this.similarProducts;
    },
    // Filter funktionalitet
    // async filterCategory(kategory) {
    //   console.log(kategory);
    //   if (kategory === "Allt") {
    //     await this.fetchProducts();
    //   } else if (kategory !== "Allt") {
    //     await this.fetchProducts();
    //     this.products = this.products.filter(
    //       (item) => item.category === kategory
    //     );
    //   }
    // },

    // Sök funktionalitet
    // searchProducts(search) {
    //   console.log(search);
    //   const matchingProducts = this.products.filter((product) => {
    //     const title = product.title.toLowerCase();
    //     return title.includes(search.toLowerCase());
    //   });
    //   if (matchingProducts.length == 0) {
    //     console.log(matchingProducts == true);
    //     console.log(matchingProducts.length);
    //     console.log(this.resterProducts.length);
    //     console.log("Nu ska man fetcha nya produkter");

    //     const matchandeProdukter = this.resterProducts.filter((produkt) => {
    //       const titel = produkt.title.toLowerCase();
    //       return titel.includes(search.toLowerCase());
    //     });
    //     console.log(matchandeProdukter.length, " vi kom till andra sök");
    //     return matchandeProdukter;
    //   } else {
    //     console.log("vi kom till else, nu ska man fetcha enligt sök");
    //     console.log(matchingProducts, typeof matchingProducts);
    //     return matchingProducts;
    //   }
    // },

    // TAR ANVÄNDAREN TILL PRODUCT
    selectProduct(id) {
      console.log(id);
      this.$router.push({
        name: "productdetail",
        params: { productID: id },
      });
    },
    // async fetchProducts() {
    //   console.log("Hej");
    //   const result = await axios.get("productapi.json", {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   });
    //   this.products = result.data;
    // },
  },
  data() {
    return {
      products: [],
      Kategori: "Allt",
      titlesok: "",
      resterProducts: [],
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

<style >
/* .product-item {
  cursor: pointer;
}

.products-wrapper {
  min-width: 100px;
  min-height: 200px;
}

.products-container {
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  overflow-x: scroll;
  grid-template-columns: 80%;
} */
</style>
