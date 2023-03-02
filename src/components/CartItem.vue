<template>
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
        <!-- <p class="info-category">{{ productCategory }}</p> -->

        <p class="info-price">{{ numberOfProducts * productPrice }} kr</p>
      </div>

      <div class="increment-container">
        <button @click="decrement" class="increment-btn">
          <p class="btn-symbol">-</p>
        </button>
        <p class="increment-number">{{ numberOfProducts }}</p>

        <button
          :disabled="this.inStock === this.numberOfProducts"
          @click="increment"
          class="increment-btn"
        >
          <p class="btn-symbol">+</p>
        </button>
      </div>
    </div>

    <button @click="remove" class="remove-item-btn">X</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    remove() {
      this.removeFromCart(this.productId);
    },
    increment() {
      this.addMore(this.cartItem);
    },
    decrement() {
      if (this.numberOfProducts > 1) {
        this.removeItemFromCart(this.cartItem);
      } else {
        this.remove();
      }
    },
    ...mapMutations([
      "removeItemFromCart",
      "removeFromCart",
      "addMore",
    ]),
  },
  data() {
    return {
      productTotalPrice: 0,
      productId: this.id,
      productTitle: this.title,
      productImg: this.image,
      productCategory: this.category,
      productPrice: this.price,
      inStock: this.stock,
      cartItem: this.product,

      numberOfItem: this.numberOfProducts,
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
    numberOfProducts: {
      type: Number,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-container {
  overflow: hidden;
  max-height: 130px;
  border: 1px solid #000000;
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr 30px;
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
  grid-template-rows: auto;
}

.info-title {
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  font-size: 0.7rem;
}

.info-category {
  font-size: 0.7rem;
  font-weight: bold;
}

.info-price {
  font-size: 0.9rem;
}

.remove-item-btn {
  font-size: 0.7rem;
  color: #ffffff;
  margin: 0.3rem;
  background: #000000;
  max-height: 20px;
}

.increment-container {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}

.increment-btn {
  position: relative;
  border: 1px solid #000000;
  height: 25px;
  background: transparent;
  margin: 0;
  padding: 0;
}
.increment-number {
  font-size: 1rem;
  text-align: center;
}

.btn-symbol {
  position: relative;
  bottom: 0.2rem;
}
</style>
