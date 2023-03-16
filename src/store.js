import { createStore } from "vuex";
const mutations = {

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
    });
  },

deleteVarukorgProducts(state){
state.cart =[]
  },
  setUserInfo(state, inputvalue) {
    state.user.fornamn = inputvalue.fornamn;
    state.user.efternamn = inputvalue.efternamn;
    state.user.gatuadress = inputvalue.gatuadress;
    state.user.telefonnummer = inputvalue.telefonnummer;
    state.user.postnummer = inputvalue.postnummer;
    state.user.email = inputvalue.email;
    state.user.stad = inputvalue.stad;
  },


  setBankInfo(state, inputvalue) {
    state.user.namnPåKort = inputvalue.namnPåKort;
    state.user.kortnummer = inputvalue.kortnummer;
    state.user.år = inputvalue.år;
    state.user.månad = inputvalue.månad;
    state.user.cvc = inputvalue.cvc;
  },

  setFraktMetod(state, payload) {
    state.user.fraktmetod = payload;
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

    fornamn: "hej",
    efternamn: "",
    gatuadress: "",
    postnummer: "",
    email: "",
    telefonnummer: "",
    stad: "",
    fraktmetod: "",
    namnPåKort: "",
    kortnummer: "",
    år: "",
    månad: "",
    cvc: "",
  },
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

  getUserInfo: () => {
    return state.user || "funkar ej";
  },
};

export default createStore({ mutations, state, getters, strict: true });
