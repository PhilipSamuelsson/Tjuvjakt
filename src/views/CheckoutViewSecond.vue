<script>

import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      väljFraktmetod: "FraktmetodOne",

      fraktmetod: "FraktmetodOne",
      btnDisabled: true

      // goToNextPage() {
      //   this.$router.push("/checkoutThird");
      // },
    };
  },

  methods: {
    ...mapMutations(["setFraktMetod"]),
    updateFraktMetod() {
      this.setFraktMetod(this.fraktmetod);
    },
  },

vidareDisabled(){
  if (this.fraktmetod ||  this.fraktmetod) {
    this.btnDisabled= false;
  }
  else{
    this.btnDisabled = true;
  }
}
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

  <div class="containerTwo">
    <h6 style="padding: 10px; margin-left: 20px">Fraktmetod</h6>
    <div class="col">
      <div class="aa">
        <input
          @input="vidareDisabled"
          v-model="fraktmetod"
          id="fraktmetodFirst"
          type="radio"
          value="DHL"
        />
        <lable for="fraktmetodFirst">49 kr</lable>
      </div>
      <div>
        <p style="font-size: 11px; margin: auto">
          DHL postombud <br />3-5 arbetsdagar
        </p>
      </div>
      <div><img class="img-dhl" src="../assets/img/DHL.png" alt="" /></div>
    </div>

    <div class="col">
      <div>
        <input
         @input="vidareDisabled"
          v-model="fraktmetod"
          id="fraktmetodSecond"
          type="radio"
          value="Postnord"
        />
        <lable for="fraktmetodSecond">99 kr</lable>
      </div>
      <div>
        <p style="font-size: 11px; margin: auto">
          Postnord Hemleverans<br />
          3-5 arbetsdagar
        </p>
      </div>
      <div><img class="img-dhl" src="../assets/img/postnord.webp" alt="" /></div>
    </div>
  </div>
  <div>
    <router-link to="/checkout" class="blueColor"
      ><i class="bx bx-chevron-left" id="back-icon"></i
    ></router-link>
    <RouterLink to="/CheckoutThird" class="blueColor" v-bind:style="{ display: btnDisabled ? 'none' : 'block' }">
      <i @click="goToNextPage" class="bx bx-chevron-right" id="next-icon"></i
    ></RouterLink>
  </div>

  <RouterLink to="/checkoutThird" class="underline">

    <button class="vidare-btn" type="submit" @click="updateFraktMetod()" :disabled="btnDisabled">
      Vidare
    </button>
  </RouterLink>

</template>

<style scoped>

.img-dhl {
  width: 2em;
  margin-right: 1em;
}
.col:focus {
  background-color: blue;
}
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
  margin: 30px;
  box-shadow: rgb(223, 223, 223) 0px 2px 2px 2px;
}

#circle-correctOne {
  background-color: rgb(48, 189, 135);
}

i[class="bx bx-check"] {
  display: flex;
  justify-content: center;
  margin: center;
  margin-top: 5px;
  font-size: 40px;
  color: rgb(248, 248, 248);
}
#icone-one {
  color: white;
}
#icon-toNextCircleOne,
#icon-toNextCircleTwo,
#icon-toNextCircleThree {
  font-size: 60px;
}

#icon-toNextCircleOne {
  color: rgb(48, 189, 135);
}
#circle-correctTwo {
  background-color: rgb(91, 179, 252);
}
#circle-correctThree,
#circle-correctFour {
  background-color: rgb(229, 242, 250);
}

.containerTwo {
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto; */
  margin: 100px auto;
  width: 60%;
  height: 220px;
  box-shadow: 1px 1px 2px 2px rgb(226, 226, 226);
}

.col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  border-radius: 5px;
  height: 60px;
  width: 500px;
  border: 1px solid rgb(103, 167, 240);
}
.col:hover {
  background-color: rgb(138, 155, 253);
  opacity: 0.3;
  color: black;
  border: 2px solid blue;
}

input,
lable {
  margin-left: 10px;
}

#back-icon {
  position: absolute;
    left: 0;
    top: 39%;
    font-size: 40px;
}

#next-icon {
  position: absolute;
    right: 0;
    top: 39%;
    font-size: 40px;
}
.vidare-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 50px;
  width: 160px;
  font-weight: 600;
  font-size: 30px;
   background-color: white;
}
.underline{
  text-decoration: none;
}
.blueColor{
    color: black;
}

@media screen and (min-width: 375px) and (max-width: 950px) {
  .circles {
    display: inline-block;
    height: 40px;
    width: 40px;
    margin: 30px 10px;
  }

  #icon-toNextCircleOne,
  #icon-toNextCircleTwo,
  #icon-toNextCircleThree {
    font-size: 30px;
  }

  #icon-toNextCircle {
    font-size: 30px;
  }
  #icone-one,
  #icone-three,
  #icone-two,
  #icone-four {
    font-size: 30px;
    margin: 5px auto;
  }

  .containerTwo {
    width: 85%;
  }

  .col {
    width: 320px;
  }

  #back-icon {
    position: absolute;
    left: 0;
    top: 39%;
    font-size: 40px;
  }
  #next-icon{
    position: absolute;
    right: 0;
    top: 39%;
    font-size: 40px;
    /* margin: -40px; */
  }
  .vidare-btn {
    height: 40px;
    width: 100px;
    font-size: 20px;
  }
}
</style>
