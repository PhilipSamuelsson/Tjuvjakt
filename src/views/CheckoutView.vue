<script setup>
// import axios from 'axios',
// export default {
//   name:'checkoutView',
//   data() {
//     return {
//       förnamn: '',
//        efternamn: '',
//        email: '',
//        telefonnummer: '',
//        gatuadress: '',
//        stad: '',
//        postnummer:''
//     }
//   },
//   methods: {
//     async checkoutView(){
//       let result = await axios.post('/checkoutView',{
//         förnamn:this.förnamn,
//         efternamn:this.efternamn,
//         email:this.email,
//         telefonnummer:this.telefonnummer,
//         gatuadress:this.gatuadress,
//         stad:this.stad,
//         postnummer:this.postnummer
//       })

//     }
//   },
//   goToNextPage(){
//     this.$router.push('/checkoutViewTSecond')
//   }
// }
//
</script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

  <div>
    <i class="bx bx-chevron-left" id="back-icon"></i>
    <i @click="goToNextPage" class="bx bx-chevron-right" id="next-icon"></i>
  </div>

  <div class="container">
    <div class="container-circles">
      <div class="circles" id="circle-correctOne">
        <i class="bx bx-check" id="icone-one"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctTwo">
        <i class="bx bx-check"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctThree">
        <i class="bx bx-check"></i>
      </div>
      <i class="bx bx-chevron-right" id="icon-toNextCircle"></i>
      <div class="circles" id="circle-correctFour">
        <i class="bx bx-check"></i>
      </div>
    </div>
  </div>

  <div class="container">
    <form class="container-checkout">
      <h3 class="adress">Adress</h3>
      <div>
        <label class="förnamn" for="förnamn"
          ><input v-model="förnamn" type="text" id="förnamn" placeholder="xx"
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
        /></label>
      </div>
      <br />

      <label class="telefonnummer" for="telefonnummer"
        ><input
          v-model="telefonnummer"
          type="tel"
          id="telefonnummer"
          placeholder="+ 123 456 789"
      /></label>
      <br />

      <div>
        <label class="gatuadress" for="gatuadress"
          ><input
            v-model="gatuadress"
            type="text"
            id="gatuadress"
            placeholder="Hägerneholmsvägen"
        /></label>
      </div>
      <br />

      <div>
        <label class="stad" for="stad">
          <input v-model="stad" type="text" id="stad" placeholder="Stockholm"
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
        /></label>
      </div>
    </form>
  </div>
  <button @click="goToNextPage" class="vidare-btn" type="submit">Vidare</button>
</template>

<style scoped>
.circles {
  display: inline-block;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border: solid rgb(71, 71, 71) 1px;
  border-radius: 50%;
  margin: 30px;
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
}
#icone-one {
  color: white;
}

#icon-toNextCircle {
  font-size: 60px;
}

.container {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.container-checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: rgb(233, 233, 233) 0px 0px 2px 2px;
  height: 90vh;
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
  top: -15px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
}

.förnamn,
.efternamn,
.stad,
.postnummer {
  display: inline-flex;
  flex-direction: column;
  width: 300px;
}

.telefonnummer,
.gatuadress,
.email {
  display: flex;
  width: 500px;
}


#back-icon {
  position: absolute;
  margin-top: 400px;
  margin-left: 200px;
  font-size: 100px;
}

#next-icon {
  position: absolute;
  margin-top: 400px;
  margin-left: 1230px;
  font-size: 100px;
}
.vidare-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 60px;
  width: 200px;
  font-weight: 800;
  font-size: 30px;
}

/* input:focus {
  border: none;
}*/
</style>
