<template>
  <div class="products-wrapper">
    <div class="products-container">
      <!-- @click="sendId(product.id)" -->
      <!--         @click="selectProduct(product.id)" -->
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
// import axios from "axios";
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
      this.$router.push({
        name: "productdetail",
        params: { productID: id },
      });
    },
    sendId(id){
        this.$emit("idFromSmallProduct",id)
    }
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
