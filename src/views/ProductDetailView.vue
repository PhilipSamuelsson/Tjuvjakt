<template>
  <div class="product-wrapper">
    <div class="product-container">
      <!-- <div class="product-img-container">
        <div
                      :style="{ backgroundImage: 'url(' + productImage + ')' }"
                      class="product-img"
                    />
                  </div> -->
      <div class="product-info-container">
        <p class="product-price">Här ligger product id {{ productID }} KR</p>
        <p class="product-price">Finns det här: {{ varan.title }} ?</p>
        <!-- <button @click="fetchProduct">Klicka rå</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productID: this.$route.params.productID,
      varan: {}
    };
  },
  // created() {
  //   this.$on('produkt-vald', ({ productData }) => {
  //     this.productData = productData;
  //   });
  // },
  methods: {
    async fetchProduct() {
      const result = await axios.get('/productapi.json', {
        headers: {
          Accept: "application/json",
        },
      });
      this.varan = result.data[this.productID - 1];
    },
  },
  mounted() {
    // this.kollar()
    this.fetchProduct()
  }
};
</script>
