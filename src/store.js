import { createStore } from "vuex";
const mutations = {
  getNumberOfProducts(state, product) {
    let count = 0;
    state.cart.forEach((item) => {
      if (product.id === item.id) {
        count += item.numberOfItem;
      }
    });
    return count;
  },
  toggleCart(state) {
    state.showCart = !state.showCart;
  },

  // TAR BORT EN VARA AV ANTALET
  removeItemFromCart(state, product) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === product.id) {
        state.cart[i].numberOfItem--;
      }
    }
  },

  // TAR BORT ALLA ANTALET
  removeFromCart(state, productId) {
    const removeThisProduct = state.cart.findIndex(
      (product) => product.id === productId
    );
    if (removeThisProduct !== -1) {
      state.cart.splice(removeThisProduct, 1);
    }
  },

  // LÄGG TILL FLER AV SAMMA PRODUKT
  addMore(state, payload) {
    state.cart.forEach((item) => {
      if (payload.id === item.id) {
        item.numberOfItem++;
      }
    });
  },

  addItemCart: (state, payload) => {
    state.cart.push({
      id: payload.id,
      title: payload.title,
      image: payload.image,
      category: payload.category,
      price: payload.price,
      quantity: payload.quantity,
      description: payload.description,
      numberOfItem: 1,
    });
  },
};

const state = {
  showCart: false,
  cart: [],
};

const getters = {
  getCartItemCount(state) {
    let count = 0;
    state.cart.forEach((item) => {
      count += item.numberOfItem;
    });
    return count;
  },

  getCartTotal: (state) => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.numberOfItem * item.price;
    });
    return total;
  },
};

export default createStore({ mutations, state, getters, strict: true });
