<script setup>
import HeroSection from "../components/HeroSection.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
import SmallProductContainer from "../components/SmallProductContainer.vue";
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      listOfProducts: [],
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      const result = await axios.get("/productapi.json", {
        headers: {
          Accept: "application/json",
        },
      });
      this.listOfProducts = result.data.filter(
        (item) => item.category === "Hittegods"
      );
    },
    toProductDetail(id) {
      this.$router.push({
        name: "productdetail",
        params: { productID: id },
      });
    },
  },
};
</script>

<template>
  <HeroSection />
  <div class="carousel-container">
    <CarouselComponent />
    <div class="explainer-item">
      <h1 class="explainer-header">Det här är rena stölden</h1>
    </div>
    <div class="c-item grey">
      <h1 class="explainer-header bottom-position">Så här jobbar vi</h1>
    </div>
    <div class="c-item grey">
      <h3 class="explainer-text">
        Våra produkter är svåra och ibland lätta att komma över. Kolla en kort
        vido på hur vårt gäng arbetar ute på gatorna
      </h3>
      <a
        target="_blank"
        class="action-btn link"
        href="https://www.youtube.com/watch?v=gxIEt3KEohk&ab_channel=RMR"
        >Se video</a
      >
    </div>
  </div>
  <div class="products-container">
    <div class="products-item">
      <h1 class="explainer-header">Senaste fynden</h1>
    </div>
    <SmallProductContainer
      @idFromSmallProduct="toProductDetail"
      :similar-products="listOfProducts"
    />
  </div>
  <div class="explainer">
    <h1 class="explainer-header">Vilka är Tjuvgods?</h1>
    <RouterLink to="/about" class="action-btn link">Läs om oss</RouterLink>
  </div>
</template>

<style scoped>
.carousel-container {
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 200px 300px;
}

.explainer,
.c-item,
.explainer-item,
.products-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.c-item {
  padding-bottom: 5rem;
}

.explainer-item {
  background-color: var(--primary-red);
}

.products-item {
  background-color: #000000;
  min-height: 300px;
}

.explainer-header {
  text-align: center;
  color: #000000;
  font-family: "Turret Road", cursive;
  font-size: 3rem;
  background-color: #ffffff;
  padding: 1rem;
  font-weight: bold;
  margin: 1rem;
}

.bottom-position {
  margin-top: 6rem;
}

.explainer-text {
  margin: 3rem;
  text-align: center;
}

.explainer {
  min-height: 300px;
  background-color: var(--grey);
}
.grey {
  background-color: var(--grey);
}

.products-container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 970px) {
  .bottom-position {
    margin-top: 0;
  }
  .carousel-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .products-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
