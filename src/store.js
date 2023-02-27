import { createStore } from "vuex";
const mutations = {
  toggleCart(state) {
    state.showCart = !state.showCart;
  },
  addToCart(state, product) {
    state.cart.push(product);
  },
  removeFromCart(state, productId) {
    const removeThisProduct = state.cart.findIndex(
      (product) => product.id === productId
    );
    if (removeThisProduct !== -1) {
      state.cart.splice(removeThisProduct, 1);
    }
  },
};
const state = {
  showCart: false,
  cart: [],
};

export default createStore({ mutations, state, strict: true });
