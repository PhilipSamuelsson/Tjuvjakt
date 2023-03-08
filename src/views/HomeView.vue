<script setup>
import HeroSection from "../components/HeroSection.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
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
      <h3 class="explainer-text">Våra produkter är svåra och ibland lätta att komma över. Kolla en kort vido på hur vårt gäng arbetar ute på gatorna</h3>
      <a target="_blank" class="action-btn link" href="https://www.youtube.com/watch?v=QWaWsgBbFsA&ab_channel=Justice">Se video</a>
      <!-- <RouterLink to="/about" class="action-btn link">Om oss</RouterLink> -->
    </div>
    <!-- <div class="c-item">
      <div class="c-img-container">
        <img
          class="c-img"
          src="https://images.unsplash.com/photo-1612821343566-56c2ff72896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=413&q=80"
          alt=""
        />
      </div>
    </div> -->
  </div>
  <div class="products-container">
    <div class="products-item">
      <h1 class="explainer-header">Senaste produkter vi har hittat</h1>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 200px 300px;
}
.c-item,
.explainer-item,
.products-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.c-item{
    padding-bottom: 5rem;
}

.explainer-item {
  background-color: var(--primary-red);
}

.products-item {
  background-color: #000000;
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

.bottom-position{
        margin-top: 10rem;
}

.explainer-text{
    margin: 3rem;
    text-align: center;
}
.grey {
    padding-bottom: 2rem;
  background-color: var(--grey);
}


.c-img-container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    max-height: 300px;
}
.c-img {
    margin: 0;
    padding: 0;
  width: 100%;
  height: auto;
}

@media (min-width: 970px) {
    .bottom-position{
        margin-top: 0;
}
  .carousel-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
