<template>
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />



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
    <p style="
            font-weight: 600;
            padding: 20px;
            margin-bottom: -15px;
            margin-left: -12px;
          ">
      Betalningmetod
    </p>
    <div class="first-content">
      <div>
        <label class="namnPåKort" for="namnPåKort">
          <input  v-model="user.namnPåKort" type="text" id="namnPåKort" placeholder="xxxx xxxx" required />
        </label>
      </div>
      <div>
        <label class="kortnummer" for="kortnummer">
          <input v-model="user.kortnummer" type="text" id="kortnummer" maxlength="16" placeholder="1111 2222 3333 4444"
            required /></label>
      </div>
    </div>

    <div class="col">
      <div>
        <label class="år" for="år">
          <select id="år" name="år" v-model="user.år" placeholder="2015" required>
            <option value="" disabled selected>År</option>
          <option v-for="year in years" :value="year" :key="year">
            {{ year }}
          </option>
            <!-- <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option> -->
          </select>
        </label>
      </div>

      <div>
        <label class="månad" for="månad">
          <select id="månad" name="månad" placeholder="Augusti" v-model="user.månad">
            <option value="" disabled selected>Månad</option>
          <option
            v-for="(month, index) in months"
            :value="index + 1"
            :key="month"
          >
            {{ month }}
          </option>
            <!-- <option value="Januari">Januari</option>
            <option value="Februari">Februari</option>
            <option value="Mars">Mars</option>
            <option value="April">April</option>
            <option value="Maj">Maj</option>
            <option value="Juni">Juni</option>
            <option value="Juli">Juli</option>
            <option value="Augusti">Augusti</option>
            <option value=" September">September</option>
            <option value="Oktober">Oktober</option>
            <option value="November">November</option>
            <option value="December">December</option> -->
          </select></label>
      </div>
    </div>

    <div class="colTwo">
      <label class="cvc" for="cvc">
        <input v-model="user.cvc" type="text" id="cvc" maxlength="5" placeholder="123 45" required/></label>
      <i class="bx bx-help-circle question"></i>
    </div>

    <p class="txt">Eller betala med våra partners in crime</p>

<div class="container-betalningmetos" style="margin-top: -30px;">
    <div class="col">
   <label for="klarna">
   <input v-model="klarna" type="radio" id="klarna" name="betalningmetos">
    Klarna</label>

   <label for="paypal">
   <input v-model="paypal" type="radio" id="paypal" name="betalningmetos">
    PayPal</label>
  </div>

    <div class="col">
     <label for="bank"  style="right: 10px;">
     <input v-model="bank" type="radio" id="bank" name="betalningmetos">
    Bank </label>

   <label for="swish" style="right: -2px;"> <input v-model="swish" type="radio" id="swish" name="betalningmetos">
    Swish</label>
</div>




    </div>

    <div>
      <RouterLink to="/checkoutsecond" class="blueColor">
        <i class="bx bx-chevron-left" id="back-icon"></i>
      </RouterLink>
      <RouterLink to="/checkoutfourth" class="blueColor" v-bind:style="{ display: btnDisabled ? 'none' : 'block' }">
        <i class="bx bx-chevron-right" id="next-icon" @click="updateBankInfo()"></i>
      </RouterLink>
    </div>
    <RouterLink to="/checkoutfourth" class="underline">
      <button class="vidare-btn" type="submit" @click="updateBankInfo()" :disabled="btnDisabled">
        Vidare
      </button>
    </RouterLink>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      selected: '',
      // user: {
      //   namnPåKort: "",
      //   kortnummer: "",
      //   år: "2015",
      //   månad: "Januari",
      //   cvc: "",
      //   btnDisabled:true
      // }
      user: { namnPåKort: "", kortnummer: "", år: "2015", månad: "Januari", cvc: "" },
      klarna: false,
      paypal: false,
      bank: false,
      swish: false,
    };
  },
  computed: {
    years(){
      return[
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023"
      ]
    },
    months() {
      return [
        "Januari",
        "Februari",
        "Mars",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Augusti",
        "September",
        "Oktober",
        "November",
        "December"
      ];
    },
    btnDisabled() {
      return !(
        this.user.namnPåKort &&
        this.user.kortnummer &&
        this.user.år &&
        this.user.månad &&
        this.user.cvc &&
        (this.klarna || this.paypal || this.bank || this.swish)
      );
    },
  },
  methods: {
    ...mapMutations(['setBankInfo']),
    updateBankInfo() {
      this.setBankInfo(this.user);
    },

  // vidareDisabled(){
  // if (this.user.namnPåKort !=='' && this.user.kortnummer !== '' && this.user.år !== ''&& this.user.månad !== '' &&  this.user.cvc !=='' && (this.klarna )) {
  //   this.btnDisabled= false;
  // }
  // else{
  //   this.btnDisabled= true;
  // }}
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
  height: 50px;
  width: 50px;
  border: solid rgb(71, 71, 71) 1px;
  border-radius: 50%;
  margin: 30px 30px;
  box-shadow: rgb(223, 223, 223) 0px 2px 2px 2px;
}

#circle-correctOne,
#circle-correctTwo {
  background-color: rgb(48, 189, 135);
}

#icon-toNextCircleOne,
#icon-toNextCircleTwo,
#icon-toNextCircleThree {
  font-size: 60px;
}

#icon-toNextCircleOne,
#icon-toNextCircleTwo {
  color: rgb(48, 189, 135);
}

#circle-correctThree {
  background-color: rgb(91, 179, 252);
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

#circle-correctFour {
  background-color: rgb(229, 242, 250);
}

.container-info {
  margin: auto;
  height: 730px;
  width: 570px;
  box-shadow: 1px 1px 2px 2px rgb(228, 228, 228);
}

.question {
  padding-top: 31px;
}

label {
  position: relative;
  padding: 7px;
  text-align: center;
  margin-top: 25px;
}

label::before {
  position: absolute;
  top: -10px;
  left: 20px;
  background-color: white;
  padding: 0 5px;
}

.namnPåKort::before {
  content: "Namn på kort";
}

.kortnummer::before {
  content: "Kortnummer";
}

.år::before {
  content: "År";
}

.månad::before {
  content: "Månad";
}

.cvc::before {
  content: "CVC";
}

.first-content {
  display: grid;
  justify-content: center;
}

#namnPåKort,
#kortnummer {
  width: 500px;
  height: 40px;
  padding: 20px;
}

.container-info .col {
  display: flex;
  justify-content: center;
}

#år,
#månad,
#cvc {
  height: 40px;
  width: 245px;
}
#cvc{
  padding: 20px;
}

.colTwo {
  margin-left: 30px;
  display: flex;
  justify-content: center;
}

.txt {
  font-weight: 600;
  /*   margin-left: 10px;
  margin-top: 30px; */
  text-align: center;
  margin-top: 2em;
}

.vidare-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  height: 50px;
  width: 180px;
  font-weight: 600;
  font-size: 25px;
  text-decoration: none;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 50px;
    font-size: 1.2rem;
    padding: .3rem;
    border: 3px solid var(--black);
    text-align: center;
    background: transparent;
    font-family: Outfit, sans-serif;
    font-weight: 900;
    margin-top: 1rem;
    text-decoration: none;
    /* color: var(--black); */
    background-color: var(--grey);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    will-change: transform;
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
  left: 2%;

  font-size: 40px;
}

#next-icon {
  position: absolute;
  top: 50%;
  right: 2%;
  font-size: 40px;

  font-size: 40px;
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
    height: 750px;
  }

  #namnPåKort,
  #kortnummer {
    width: 300px;
  }

  #år,
  #månad,
  #cvc {
    width: 143px;
  }



  .vidare-btn {
    height: 40px;
    width: 100px;
    font-size: 20px;
  }

  #back-icon {
    font-size: 40px;
    position: absolute;
    top: 50%;
    left: 2%;


    /* margin-left: 0; */
    /* margin-top: 400px; */
  }

  #next-icon {
    position: absolute;
    top: 50%;
    right: 2%;
    font-size: 40px;
  }


}
</style>
