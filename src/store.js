import { createStore } from "vuex";
const mutations = {
  toggleCart(state) {
    state.showCart = !state.showCart;
  },
};
const state = { showCart: false };

export default createStore({ mutations, state, strict: true });
