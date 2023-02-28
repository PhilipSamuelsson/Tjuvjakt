<template>
  <h2 class="caroHeader">Toppsäljare</h2>

  <div class="caroContainer">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/CaroShoe1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/CaroShoe2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/CaroShoe3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
* {
}
.caroHeader {
  text-align: center;
  margin: 50px;
  background: none;
}
.caroContainer {
  display: flex;
  margin: 0 auto;
  width: 50%;
  align-items: center;
}

@media only screen and (max-width: 1000px) {
  .caroContainer {
    width: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .caroContainer {
    width: 100%;
  }
}
</style>
