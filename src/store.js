import { createStore } from "vuex";
const mutations = {
  toggleCart(state) {
    state.showCart = !state.showCart;
  },
  addToCart(state, product) {
    state.cart.push(product);
    console.log(state.cart)
  },
};
const state = {
  showCart: false,
  cart: [],
};

export default createStore({ mutations, state, strict: true });
