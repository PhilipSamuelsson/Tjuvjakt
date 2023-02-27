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
      <div class="increment-container">
        <button @click="decrement" class="increment-btn">-</button>
        <p class="increment-number">{{ quantity }}</p>
        <button @click="increment" class="increment-btn">+</button>
      </div>
      <!-- <CartItemIncrement /> -->
    </div>
    <button @click="removeFromCart" class="remove-item-btn">X</button>
  </div>
</template>

<script>
// import CartItemIncrement from "../components/CartItemIncrement.vue";
export default {
  components: {
    // CartItemIncrement,
  },
  methods: {
    removeFromCart() {
      console.log(this.productId);
    },
    increment() {
      if (this.inStock > this.number) {
        this.productPrice += this.price;
        this.number++;
      }
    },
    decrement() {
      if (this.number > 1) {
        console.log("slut");
        this.productPrice -= this.price;
        this.number--;
      }
    },
  },
  computed: {
    quantity() {
      return this.number;
    },
    totalPrice() {
      return this.productPrice;
    },
  },
  data() {
    return {
      number: 1,
      productId: this.id,
      productTitle: this.title,
      productImg: this.image,
      productCategory: this.category,
      productPrice: this.price,
      inStock: this.stock,
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
    stock: {
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
    border: 1px solid #000000;
  width: 100%;
  /* max-height: 100px; */
  display: grid;
  grid-template-columns: 1fr 100px 50px;
  margin: 0.5rem 0;
  gap: 0.5rem;
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

.cart-info {
  /* display: grid; */
}

.info-title {
  margin: 0;
  padding: 0;
  padding-top: .5rem;
  font-size: 0.6rem;
}

.info-category {
  font-size: 0.7rem;
  font-weight: bold;
}

.info-price {
}

.remove-item-btn {
    margin: .5rem;
    border: 1px solid #000000;
  background: transparent;
  max-height: 30px;
}

.increment-container {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
}

.increment-btn {
    border: 1px solid #000000;
  height: 30px;
  background: transparent;
  margin: 0;
  padding: 0;
}
.increment-number {
  text-align: center;
}
</style>
