<template>
  <div class="sum">
    <h4>{{ productTitle }}</h4>
    <img :src="productImg" class="img-fluid" alt="..." >

    <p> Pris {{ productPrice }}:- </p>
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




<div class="line"></div>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    remove() {
      this.removeFromCart(this.productId);
    },
    increment() {
      this.numberOfItem++;
      this.addMore(this.cartItem);
    },
    // decrement() {
    //   if (this.getCartItemCount > 1) {
    //     this.numberOfItem--;
    //     this.removeItemFromCart(this.cartItem);
    //   } else {
    //     this.remove();
    //   }
    // },

    decrement() {
      if (this.numberOfItem > 1) {
        this.numberOfItem--;
        this.removeItemFromCart(this.cartItem);
      } else {
        this.remove();
      }
    },


    ...mapMutations([
      "addItemCart",
      "removeItemFromCart",
      "removeFromCart",
      "addMore",
    ]),
  },

  computed: {
    ...mapGetters(["getCartItemCount"]),
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
      numberOfItem: 1,
      beskr: this.beskrivning,
      lorem: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      antal: this.numberOfProducts
    };
  },
  props: {
    beskrivning: {
      type: String,
      required: true
    },
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
.sum {
    width: 60%;
    margin: 0 auto;
}
.line {
    height: 0.3em;
    background-color: black;
    margin-bottom: 1em;
    width: 150px;
}

img {
    width: 50%;
    max-height: 500px;
    padding: 1em 0;
}


@media (min-width: 350px) {
    .increment-container {
        width: 60%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
    }
    .sum {
        width: 90%;
        margin-left: 10vw;
    }
}

@media (min-width: 550px) {
    .increment-container {
        width: 40%;
    }
    .sum {
        width: 60%;
    }
}

@media (min-width: 950px) {
  .sum {
    width: 60%;
    margin-left: 20vw;
  }
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

.btn-symbol{
    position: relative;
    bottom: .2rem;
}
</style>
