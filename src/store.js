import { createStore } from "vuex";
const mutations = {
  // getNumberOfProducts(state, productId) {
  //   let count = 0;
  //   state.cart.forEach((item) => {
  //       console.log(item)
  //     if (productId === item.id) {
  //       count += item.numberOfItem;
  //     }
  //   });
  //   console.log(count)
  //   return count;

  // },

  toggleCart(state) {
    state.showCart = !state.showCart;
  },

  removeItemFromCart(state, product) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === product.id) {
        state.cart[i].numberOfItem--;
      }
    }
  },

  removeFromCart(state, productId) {
    const removeThisProduct = state.cart.findIndex(
      (product) => product.id === productId
    );
    if (removeThisProduct !== -1) {
      state.cart.splice(removeThisProduct, 1);
    }
  },

  addMore(state, payload) {
    state.cart.forEach((item) => {
      if (payload.id === item.id) {
        item.numberOfItem++;
      }
    })
  },

  // inputkey
  setUserInfo(inputvalue) {
    console.log("körs setUser?")
    state.user.fornamn = inputvalue;
  },
  getUserInfo() {
    return state.user.fornamn
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
  user: {
    fornamn: '',
    efternamn: '',
    gatuadress: '',
    postnummer: '',
    email: '',
    telefonnummer: '',
    stad: ''
  }
};

// Används ej. Kanske ta bort. inputkey,
const setters = {
  setUserInfo: (inputvalue) => {
    state.user.fornamn = inputvalue;
  }
}

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

  getUserInfo: () => {
    return state.user.fornamn || "funkar ej"
  }
};

export default createStore({ mutations, state, getters, strict: true, setters });
