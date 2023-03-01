<template>
  <div class="col">
    <div class="kontägner">
      <img :src="varan.image" alt="product image" class="produktbilden" />
    </div>
  </div>
  <div class="information">
    <h4 class="titel">Vara {{ productID }}: {{ varan.title }}</h4>

    <button v-if="disabledAddButton" class="kopKnapp" @click="varuID">

      Lägg i Kundkorg
    </button>

    <button v-if="!disabledAddButton" class="kopKnapp" >

      Ta bort från varukorgen
    </button>
  </div>
  <div class="mer-information">
    <h4 class="pris">Pris {{ varan.price }} Kr</h4>
  </div>
  <div class="mera-information">
    <p>
      Beskrivning: <br />
      {{ varan.description }}
    </p>
    <h4>Kategori: {{ varan.category }}</h4>
    <h4>(Antal) I lager: {{ varan.quantity }}</h4>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      productID: this.$route.params.productID,
      varan: {},
      noProductAdded: true,
    };
  },
  computed: {
    disabledAddButton() {
      for (let i = 0; i < this.$store.state.cart.length; i++) {
        if (this.varan.id === this.$store.state.cart[i].id) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    async fetchProduct() {
      const result = await axios.get("/productapi.json", {
        headers: {
          Accept: "application/json",
        },
      });
      this.varan = result.data[this.productID - 1];
    },
    ...mapMutations(["addItemCart"]),
    varuID() {
        this.addItemCart(this.varan)
    //   this.$store.commit("addToCart", this.varan);
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style>
.kontägner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
}

.produktbilden {
  width: clamp(250px, 80%, 920px);
}

.information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 3vh auto;
  justify-content: space-between;
}

.information .kopKnapp {
  background-color: white;
  padding: clamp(1.5%, 2%, 3%) clamp(1.5%, 4%, 7%);
  font-size: clamp(12px, 3vw, 20px);
  border: 3px black solid;
  font-weight: bolder;
  font-family: "Outfit", sans-serif;
}

.information h4 {
  font-size: clamp(16px, 4vw, 24px);
  font-family: "Outfit", sans-serif;
}

.mer-information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 3vh auto;
  justify-content: space-between;
}

.mer-information h4 {
  font-size: clamp(16px, 4vw, 24px);
  font-family: "Outfit", sans-serif;
}

.mera-information {
  width: clamp(250px, 80%, 920px);
  display: flex;
  margin: 12vh auto;
  flex-direction: column;
}

.mera-information h4 {
  font-size: clamp(16px, 4vw, 24px);
  font-family: "Outfit", sans-serif;
  margin: 2vh 0;
}

.mera-information p {
  font-size: clamp(12px, 3vw, 20px);
  font-family: "Outfit", sans-serif;
  line-height: 2.2em;
}
</style>
