<script setup>
import { ref } from "vue";
const showSearch = ref(false);
const showSort = ref(false);
</script>

<template>
  <div class="searchSort">
    <!-- Search -->
    <div>
      <i class="fa-solid fa-magnifying-glass" @click="showSearch = !showSearch"></i>
      <input class="openClose" type="dropdown" v-model="titlesok"
        v-bind:style="{ display: showSearch ? 'block' : 'none' }">
    </div>

    <!-- Sort -->
    <div>
      <i class="fa-solid fa-filter" @click="showSort = !showSort"></i>
      <select v-model="Kategori" v-bind:style="{ display: showSort ? 'block' : 'none' }"
        @change="filterCategory(this.Kategori)">
        <option>Allt</option>
        <option>Hittegods</option>
        <option>Kläder</option>
        <option>Skor</option>
        <option>Elektronik</option>
        <option>Glasögon</option>
      </select>
      <!-- <input class="openClose" type="dropdown" v-model="this.Kategori" v-bind:style="{ display: showSort ? 'block' : 'none' }"> -->
    </div>


    <!-- Div @click style=display:block/none -->


    <!-- <input class=openClose type=dropdown v-model=this.data> -->

  </div>
  <!-- {display: showVillkor ? 'block' : 'none' }" -->
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

@media (min-width: 550px) {
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
    priceHigh() {
      this.products.sort((a, b) => a.price - b.price);
      console.log("körs denna funktion? priceHigh")
    },
    priceLow() {
      this.products.sort((a, b) => b.price - a.price);
      console.log("körs denna funktion? priceLow")
    },

    // Filter funktionalitet
    async filterCategory(kategory) {
      console.log(kategory)
      if (kategory === "Allt") {
        await this.fetchProducts()
      }
      else if (kategory !== "Allt") {
        await this.fetchProducts()
        this.products = this.products.filter(item => item.category === kategory);
      }
    },

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
      Kategori: "Allt",
      titlesok: "",
      // filteredArray: []
      // Kategori: "Glasögon" || "Skor" || "Kläder" || "Hittegods" || "Elektronik",

    };
  },
};

</script>
