<script setup>
import { ref } from "vue";
const showSearch = ref(false);
const showSort = ref(false);
</script>

<template>
  <div class="searchSort">
    <!-- Search -->
    <div>
      <i
        class="fa-solid fa-magnifying-glass"
        @click="showSearch = !showSearch"
      ></i>
      <input
        @keyup.enter="this.products = searchProducts(this.titlesok)"
        placeholder="Sök efter produkt..."
        class="openClose"
        type="text"
        v-model="titlesok"
        v-bind:style="{ display: showSearch ? 'block' : 'none' }"
      />
    </div>

    <!-- Sort -->
    <div>
      <i class="fa-solid fa-filter" @click="showSort = !showSort"></i>
      <h5 v-bind:style="{ display: showSort ? 'block' : 'none' }">
        Filtrera efter Kategori
      </h5>
      <select
        v-model="Kategori"
        v-bind:style="{ display: showSort ? 'block' : 'none' }"
        @change="filterCategory(this.Kategori)"
      >
        <option>Allt</option>
        <option>Hittegods</option>
        <option>Kläder</option>
        <option>Skor</option>
        <option>Elektronik</option>
        <option>Glasögon</option>
      </select>
      <button @click="priceLow">Pris: Lågt till högt</button>
      <button @click="priceHigh">Pris: Högt till lågt</button>
      <button @click="alfabeticalHigh">Alfabetisk ordning: A-Ö</button>
      <button @click="alfabeticalLow">Alfabetisk ordning: Ö-A</button>
    </div>

    <!-- Div @click style=display:block/none -->

    <!-- <input class=openClose type=dropdown v-model=this.data> -->
  </div>
  <!-- {display: showVillkor ? 'block' : 'none' }" -->
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
      this.products.sort((a, b) => b.price - a.price);
      console.log("körs denna funktion? priceHigh");
    },
    alfabeticalHigh() {
      this.products.sort((a, b) => a.title.localeCompare(b.title));
      console.log("körs denna funktion? AlfabeticalHigh");
    },
    alfabeticalLow() {
      this.products.sort((a, b) => a.title.localeCompare(b.title)).reverse();
      console.log("körs denna funktion? AlfabeticalLow");
    },
    priceLow() {
      this.products.sort((a, b) => a.price - b.price);
      console.log("körs denna funktion? priceLow");
    },

    // Filter funktionalitet
    async filterCategory(kategory) {
      console.log(kategory);
      if (kategory === "Allt") {
        await this.fetchProducts();
      } else if (kategory !== "Allt") {
        await this.fetchProducts();
        this.products = this.products.filter(
          (item) => item.category === kategory
        );
      }
    },

    // Sök funktionalitet
    searchProducts(search) {
      console.log(search);
      const matchingProducts = this.products.filter((product) => {
        const title = product.title.toLowerCase();
        return title.includes(search.toLowerCase());
      });
      if (matchingProducts.length == 0) {
        console.log(matchingProducts == true);
        console.log(matchingProducts.length);
        console.log(this.resterProducts.length);
        console.log("Nu ska man fetcha nya produkter");

        const matchandeProdukter = this.resterProducts.filter((produkt) => {
          const titel = produkt.title.toLowerCase();
          return titel.includes(search.toLowerCase());
        });
        console.log(matchandeProdukter.length, " vi kom till andra sök");
        return matchandeProdukter;
      } else {
        console.log("vi kom till else, nu ska man fetcha enligt sök");
        console.log(matchingProducts, typeof matchingProducts);
        return matchingProducts;
      }
    },

    selectProduct(id) {
      // const valdProdukt = this.products.find(product => product.id == id)
      // console.log(valdProdukt.title)
      // console.log(id); name: 'productdetail' Voalr föreslåt detta "name: ProductDetailView" props: { productData: this.products }
      // this.$emit("produkt-vald", { id, productData: valdProdukt });
      this.$router.push({
        name: "productdetail",
        params: { productID: id },
      });
    },
    async fetchProducts() {
      const result = await axios.get("productapi.json", {
        headers: {
          Accept: "application/json",
        },
      });
      this.products = result.data;
      this.resterProducts = result.data;
    },
  },
  data() {
    return {
      products: [],
      Kategori: "Allt",
      titlesok: "",
      resterProducts: [],
      // filteredArray: []
      // Kategori: "Glasögon" || "Skor" || "Kläder" || "Hittegods" || "Elektronik",
    };
  },
};
</script>
