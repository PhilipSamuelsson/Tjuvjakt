<template>
  <div class="product-wrapper">
    <div class="product-container">
      <div class="product-img-container">
        <div
          :style="{ backgroundImage: 'url(' + productImage + ')' }"
          class="product-img"
        ></div>
      </div>
      <div class="product-info-container">
        <p class="product-title">{{ productTitle }}</p>
        <p class="product-price">{{ productPrice }} KR</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productId: "",
      productTitle: this.title,
      productImage: this.image,
      productPrice: this.price,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.product-wrapper {
  margin: 0.4rem;
  border: 1px solid black;
}

.product-container {
  display: grid;
  grid-template-rows: 200px 80px;
}

.product-img-container {
  /* min-height: 100px;
    overflow: hidden; */
}

.product-img-container img {
  max-width: 100%;
  height: auto;
}

.product-img {
  height: 100%;
  background-position: center;
  background-size: cover;
}

.product-info-container {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  display: grid;
  grid-template-rows: 20px 30px;
}

.product-title {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 0.6rem;
}

.product-price {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 1.2rem;
}
</style>
