<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

  <div>
    <i class="bx bx-chevron-left" id="back-icon"></i>
    <RouterLink to="/checkoutsecond">
      <i @click="goToNextPage" class="bx bx-chevron-right" id="next-icon"></i
    ></RouterLink>
  </div>

  <div class="container">
    <div class="container-circles">
      <div class="circles" id="circle-correctOne">
        <i class="bx bx-check" id="icone-one"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctTwo">
        <i class="bx bx-check" id="icone-two"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctThree">
        <i class="bx bx-check" id="icone-three"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctFour">
        <i class="bx bx-check" id="icone-four"></i>
      </div>
    </div>
  </div>

  <div class="container">
  
    <form class="container-checkout">
      <h3 class="adress">Adress</h3>
      <div>
        <label class="förnamn" for="förnamn"
          ><input
            v-model="förnamn"
            type="text"
            id="förnamn"
            placeholder="xx"
            required
        /></label>
      </div>
      <br />

      <div>
        <label class="efternamn" for="efternamn"
          ><input
            v-model="efternamn"
            type="text"
            id="efternamn"
            placeholder="xx"
            required
        /></label>
      </div>
      <br />

      <div>
        <label class="email" for="email"
          ><input
            v-model="email"
            type="email"
            id="email"
            placeholder="username@gmail.com"
            required
        /></label>
      </div>
      <br />

      <label class="telefonnummer" for="telefonnummer"
        ><input
          v-model="telefonnummer"
          type="tel"
          id="telefonnummer"
          placeholder="+ 123 456 789"
          required
      /></label>
      <br />

      <div>
        <label class="gatuadress" for="gatuadress"
          ><input
            v-model="gatuadress"
            type="text"
            id="gatuadress"
            placeholder="Hägerneholmsvägen"
            required
        /></label>
      </div>
      <br />

      <div>
        <label class="stad" for="stad">
          <input
            v-model="stad"
            type="text"
            id="stad"
            placeholder="Stockholm"
            required
        /></label>
      </div>
      <br />

      <div>
        <label class="postnummer" for="postnummer"
          ><input
            v-model="postnummer"
            type="text"
            id="postnummer"
            placeholder="123 45"
            required
        /></label>
      </div>
    </form>
  </div>
  <RouterLink to="/checkoutsecond">
    <button @click="goToNextPage" class="vidare-btn" type="submit">
      Vidare
    </button></RouterLink
  >
</template>

<script>
import axios from "axios";
export default {
  name: "checkoutView",
  data() {
    return {
      förnamn: "",
      efternamn: "",
      email: "",
      telefonnummer: "",
      gatuadress: "",
      stad: "",
      postnummer: "",
    };
  },
  methods: {
    async checkoutView() {
      await axios.post("/checkoutView", {
        förnamn: this.förnamn,
        efternamn: this.efternamn,
        email: this.email,
        telefonnummer: this.telefonnummer,
        gatuadress: this.gatuadress,
        stad: this.stad,
        postnummer: this.postnummer,
      });
    },
  },
  goToNextPage() {
    this.$router.push("/checkoutViewSecond");
  },
};
</script>

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
  height: 60px;
  width: 60px;
  border: solid rgb(71, 71, 71) 1px;
  border-radius: 50%;
  margin: 30px 30px;
  box-shadow: rgb(223, 223, 223) 0px 2px 2px 2px;
}

#circle-correctOne {
  background-color: rgb(91, 179, 252);
}

i[class="bx bx-check"] {
  display: flex;
  justify-content: center;
  margin: center;
  margin-top: 10px;
  font-size: 40px;
  color: rgb(248, 248, 248);
  /* box-shadow: 1px 1px 2px 2px rgb(236, 236, 236); */
}

#icon-toNextCircle {
  font-size: 60px;
}

#circle-correctTwo,
#circle-correctThree,
#circle-correctFour {
  background-color: rgb(229, 242, 250);
}
.container-checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  box-shadow: rgb(233, 233, 233) 0px 0px 2px 2px;
  height: 100vh;
  width: 50%;
}

label {
  position: relative;
  padding: 7px;
  text-align: center;
  margin-top: 25px;
}

label::before {
  content: "Förnamn";
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
}

#förnamn,
#efternamn,
#stad,
#postnummer {
  display: inline-flex;
  flex-direction: column;
  width: 250px;
  height: 40px;
}

#telefonnummer,
#gatuadress,
#email {
  display: flex;
  width: 500px;
  height: 40px;
}

#back-icon {
  position: absolute;
  margin-top: 400px;
  margin-left: 200px;
  font-size: 80px;
}

#next-icon {
  position: absolute;
  margin-top: 400px;
  margin-left: 1230px;
  font-size: 80px;
}
.vidare-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 50px;
  width: 180px;
  font-weight: 800;
  font-size: 25px;
  text-decoration: none;
}

/* input:focus {
  border: none;
}*/
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
  #icone-one,
  #icone-three,
  #icone-two,
  #icone-four {
    font-size: 30px;
    margin: 5px auto;
  }

  #förnamn,
  #efternamn,
  #stad,
  #postnummer {
    width: 200px;
  }

  #telefonnummer,
  #gatuadress,
  #email {
    width: 350px;
  }

  .container-checkout {
    width: 90%;
    height: 800px;
  }

  .vidare-btn {
    height: 40px;
    width: 100px;
    font-size: 20px;
  }

  #back-icon {
    font-size: 40px;
    margin-left: 0;
  }
  /* #next-icon{
  font-size: 40px;
  margin-right: -40px;
} */
}
</style>
