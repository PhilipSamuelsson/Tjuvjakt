<script>
// import CheckoutView from "./CheckoutView.vue";

// export default {
//     props:{
//         förnamn:{
//             type:String,
//             required:true,
//         },
//         efternamn:{
//             type:String,
//             required:true
//         },
//         gatuadress:{
//             type:String,
//             required:true
//         }
//     }
// }
// export default {
//   mounted() {
//     if (!this.$router.params.names || !this.$router.params.gatuadress) {
//       this.$router.push({ name: CheckoutView });
//     }
//   },
////
//   data() {
//     return {
//     //   goToBack() {
//     //     this.$router.push("/checkoutThird");
//     //   },
//     };
//   },
// };
import ConfirmSummary from "../components/ConfirmSummary.vue";
import { mapGetters } from "vuex";
import ConfirmList from "../components/ConfirmList.vue";

export default {
  computed: {
    ...mapGetters(["getCartTotal"]),
  },

  components: {
    ConfirmSummary,
  },

  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.cartList = this.$store.state.cart;
    },
  },
  data() {
    return {
      cartList: [],
    };
  },
};
</script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

  <div class="container">
    <div class="container-circles">
      <div class="circles" id="circle-correctOne">
        <i class="bx bx-check" id="icone-one"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircleOne"></i>

      <div class="circles" id="circle-correctTwo">
        <i class="bx bx-check" id="icone-two"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircleTwo"></i>

      <div class="circles" id="circle-correctThree">
        <i class="bx bx-check" id="icone-three"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircleThree"></i>

      <div class="circles" id="circle-correctFour">
        <i class="bx bx-check" id="icone-four"></i>
      </div>
    </div>
  </div>

  <div class="container-info">
    <p style="font-weight: 600; padding: 20px">Bekräfta köp</p>
    <div class="col flex-row">
      <ConfirmSummary
        v-for="cartItem in cartList"
        :key="cartItem.id"
        :id="cartItem.id"
        :title="cartItem.title"
        :image="cartItem.image"
        :price="cartItem.price"
        :product="cartItem"
      />
      <!--       <div class="content-one"></div>
      <div class="content-two"></div>
      <div class="content-one"></div>
      <div class="content-two"></div> -->
    </div>

    <div class="content">
      <hr />
      <p>
        Namn: {{ $store.state.user.fornamn }} {{ $store.state.user.efternamn }}
      </p>
      <hr />
      <p>Leveransadress: {{ $store.state.user.gatuadress }}</p>
      <hr />
      <p>Fraktmetod: {{ $store.state.user.fraktmetod }}</p>
      <hr />
    </div>
    <button
      type="button"
      class="köp-btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Köp
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Orderbekräftelse
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p text-center>
              Tack för ditt köp! <br />
              Dina tjuvgods är nu påväg!
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <RouterLink to="/checkoutThird" class="blueColor"
      ><i @click="goToBack" class="bx bx-chevron-left" id="back-icon"></i
    ></RouterLink>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.circles {
  display: inline-block;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: solid rgb(71, 71, 71) 1px;
  border-radius: 50%;
  margin: 30px 30px;
  box-shadow: rgb(223, 223, 223) 0px 2px 2px 2px;
}

#circle-correctOne,
#circle-correctTwo,
#circle-correctThree {
  background-color: rgb(48, 189, 135);
}

#circle-correctFour {
  background-color: rgb(91, 179, 252);
}

#icon-toNextCircleOne,
#icon-toNextCircleTwo,
#icon-toNextCircleThree {
  font-size: 60px;
}

#icon-toNextCircleOne,
#icon-toNextCircleTwo,
#icon-toNextCircleThree {
  color: rgb(48, 189, 135);
}

i[class="bx bx-check"] {
  display: flex;
  justify-content: center;
  margin: center;
  margin-top: 5px;
  font-size: 40px;
  color: rgb(248, 248, 248);
  /* box-shadow: 1px 1px 2px 2px rgb(236, 236, 236); */
}

#icon-toNextCircle {
  font-size: 60px;
}

.container-info {
  /* display: flex;
  justify-content: center;
  align-items: center; */

  margin: auto;
  height: 750px;
  width: 600px;
  box-shadow: 1px 1px 2px 2px rgb(228, 228, 228);
}

.content {
  padding: 40px;
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
}
.content-one {
  height: 10vh;
  width: 8vw;
  border: 1px solid rgb(199, 199, 199);
  margin: 20px auto;
}

.content-two {
  height: 10vh;
  width: 15vw;
  border-bottom: 3px solid rgb(199, 199, 199);
  border-top: 3px solid rgb(199, 199, 199);
}

hr {
  /* width: 520px;
  height: 5px; */
  color: rgb(161, 161, 161);
  border-top: 3px solid rgb(95, 95, 95);
}

.köp-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 50px;
  width: 180px;
  font-weight: 600;
  font-size: 30px;
  background-color: white;
}
.underline {
  text-decoration: none;
}
.blueColor {
  color: black;
}

#back-icon {
  position: absolute;
  top: 50%;
  left: 0;
  /*   margin-top: 400px;
  margin-left: 200px; */
  font-size: 40px;
}

#next-icon {
  position: absolute;
  margin-top: 400px;
  margin-left: 1230px;
  font-size: 80px;
}

@media screen and (min-width: 375px) and (max-width: 980px) {
  .circles {
    display: inline-block;
    height: 40px;
    width: 40px;
    margin: 30px 10px;
  }

  #icon-toNextCircle {
    font-size: 30px;
  }

  #icon-toNextCircleOne,
  #icon-toNextCircleTwo,
  #icon-toNextCircleThree {
    font-size: 30px;
  }
  #icone-one,
  #icone-three,
  #icone-two,
  #icone-four {
    font-size: 30px;
    margin: 5px auto;
  }
  .container-info {
    width: 80%;
  }
  .content-one {
    width: 15vw;
  }
  .content-two {
    width: 20vw;
  }

  hr {
    width: 250px;
  }
  .content p {
    font-size: 10px;
    font-weight: 800;
  }
  .köp-btn {
    height: 40px;
    width: 100px;
    font-size: 20px;
  }
  #back-icon {
    /*     font-size: 40px;
    position: absolute;
    top: 50;
    left: 0; */
    /*     margin-left: -10px;
    margin-top: 500px; */
  }
}
</style>
