<template>
  <!-- <div class="grid-container">
    <div class="grid-item part1">
      <div>PRODUKTernas produkter</div>
    </div>
    <div class="grid-item part2">
      <ul>
        <li>Title</li>
        <li>Kategori</li>
        <li>Pris</li>
      </ul>
    </div>
  </div> -->

  <div class="item-container">
    <div class="img-item">
      <div
        :style="{ backgroundImage: 'url(' + productImg + ')' }"
        class="img-container"
      />
    </div>
    <div class="spec-item">
      <div class="cart-info">
        <p class="info-title">{{ productTitle }}</p>
        <p class="info-category">{{ productCategory }}</p>
        <p class="info-price">{{ totalPrice }}</p>
      </div>
      <CartItemIncrement />
    </div>
    <button @click="removeFromCart" class="remove-item-btn">X</button>
  </div>
</template>

<script>
import CartItemIncrement from "../components/CartItemIncrement.vue";
export default {
  components: {
    CartItemIncrement,
  },
  methods: {
    removeFromCart() {
      console.log(this.productId);
    },
  },
  computed:{
    totalPrice(){
        return this.productPrice
    }
  },
  data() {
    return {
      productId: this.id,
      productTitle: this.title,
      productImg: this.image,
      productCategory: this.category,
      productPrice: this.price,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  //   name: "CartItem",
  //   props: {},
};
</script>

<style scoped>
/* .grid-container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "part1 part2";
}

.grid-item {
  z-index: 1000;

  background-color: green;
} */

.item-container {
    /* max-height: 100px; */
  display: grid;
  grid-template-columns: 1fr 1fr 30px;
  padding: .5rem 0;
  gap: .5rem;
}
.img-container {
  height: 100%;
  background-position: center;
  background-size: cover;
}

.spec-item {
  display: grid;
  /* grid-template-rows: 3fr 1fr; */
}

.cart-info{
    /* display: grid; */
}

.info-title{
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
}

.info-category{
    font-size: .7rem;
    font-weight: bold;
}

.info-price{
}

.remove-item-btn {
  background: transparent;
  max-height: 30px;
}
</style>
