<template>
  <div class="col">
    <div class="kontägner">
      <img :src=varan.image alt="product image" class="produktbilden">
    </div>
  </div>
  <div class="information">
    <h4 class="titel">Vara {{ productID }}: {{ varan.title }}</h4>
    <h4 class="pris">Pris {{ varan.price }} Kr</h4>
  </div>
  <div class="mer-information">
    <h4>Kategori: {{ varan.category }}</h4>
    <h4>(Antal) I lager: {{ varan.quantity }}</h4>
  </div>
  <div class="mera-information">
    <p>Beskrivning: <br> {{ varan.description }}</p>
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
    this.fetchProduct()
  }
};
</script>

<style scoped>
.kontägner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
}

.produktbilden {
  width: clamp(250px, 80%, 920px);
}

.information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 3vh auto;
  justify-content: space-between;
}

.information h4 {
  font-size: clamp(16px, 4vw, 24px);
}

.mer-information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 3vh auto;
  justify-content: space-between;
}

.mer-information h4 {
  font-size: clamp(16px, 4vw, 24px);
}

.mera-information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 3vh auto;
  justify-content: space-between;
}

.mera-information p {
  font-size: clamp(12px, 3vw, 20px);
}
</style>
