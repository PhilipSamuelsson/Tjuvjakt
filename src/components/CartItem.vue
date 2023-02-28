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
        <p class="info-category">{{ productCategory }}</p>
        <p class="info-price">{{ getCartItemCount * productPrice }}</p>
      </div>

      <div class="increment-container">

        <button @click="decrement" class="increment-btn">-</button>
        <p class="increment-number">{{ getCartItemCount }}</p>

        <button
          :disabled="this.inStock === getCartItemCount"

          @click="increment"

          class="increment-btn"
        >
          +
        </button>
      </div>
    </div>

    <button @click="remove" class="remove-item-btn">X</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {},
  methods: {
    remove() {

      this.removeFromCart(this.productId);
    },
    increment() {
      //this.addItemCart(this.cartItem);
      this.addMore(this.cartItem)
    },
    decrement() {

      if (this.getCartItemCount > 1) {
        this.removeItemFromCart(this.cartItem);
      } else {
        this.remove()

      }
    },

    ...mapMutations(["addItemCart", "removeItemFromCart", "removeFromCart", "addMore"]),
  },
  computed: {
    ...mapGetters(["getCartItemCount"]),
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
      cartItem: this.product,
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
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.item-container {
  border: 1px solid #000000;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 35px;
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
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0.3rem;
  background: #000000;
  max-height: 25px;
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
