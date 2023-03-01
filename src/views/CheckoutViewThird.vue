<script></script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

  <div>
    <RouterLink to="/checkoutsecond"
      ><i class="bx bx-chevron-left" id="back-icon"></i
    ></RouterLink>
    <RouterLink to="/checkoutforth"
      ><i class="bx bx-chevron-right" id="next-icon"></i
    ></RouterLink>
  </div>

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
    <div class="first-content">
      <p
        style="
          font-weight: 600;
          padding: 20px;
          margin-bottom: -15px;
          margin-left: -12px;
        "
      >
        Betalningmetod
      </p>
      <div class="row">
        <div>
          <label class="namnPåKort" for="namnPåKort">
            <input
              v-model="namnPåKort"
              type="text"
              id="namnPåKort"
              placeholder="xxx xxx xxx"
              required
            />
          </label>
        </div>
        <div>
          <label class="kortnummer" for="kortnummer">
            <input
              v-model="kortnummer"
              type="text"
              id="kortnummer"
              placeholder="1111 222 33333 444 55555"
              required
          /></label>
        </div>
      </div>

      <div class="col">
        <div>
          <label class="år" for="år">
            <select id="år" name="år">
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </label>
        </div>

        <div>
          <label class="månad" for="månad">
            <select id="månad" name="månad" placeholder="Augusti">
              <option value="Januari">Januari</option>
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
              <option value="December">December</option>
            </select></label
          >
        </div>
      </div>

      <div class="colTwo">
        <label class="cvc" for="cvc">
          <input v-model="cvc" type="text" id="cvc" placeholder="123 45"
        /></label>
        <i class="bx bx-help-circle"></i>
      </div>

      <p class="txt">Eller betala med våra partners in crime</p>

      <div class="img-betalningmetos">
        <img src="../assets/img/klarna.PNG" alt="Bild" />
        <img src="../assets/img/paypal.PNG" alt="Bild" />
        <img src="../assets/img/bank.PNG" alt="Bild" />
        <img src="../assets/img/swish.PNG" alt="Bild" />
      </div>
    </div>

    <RouterLink to="/checkoutfourth">
      <button @click="goToNextPage" class="vidare-btn" type="submit">
        Vidare
      </button></RouterLink
    >
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
  height: 60px;
  width: 60px;
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
  margin-top: 10px;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: auto;
  height: 700px;
  width: 600px;
  box-shadow: 1px 1px 2px 2px rgb(228, 228, 228);
}

label {
  position: relative;
  padding: 7px;
  text-align: center;
  margin-top: 25px;
}

label::before {
  content: "Namn på kort";
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
}

#namnPåKort,
#kortnummer {
  width: 500px;
  height: 40px;
  padding: 20px;
}

.col {
  display: flex;
  justify-content: center;
}
#år,
#månad,
#cvc {
  height: 40px;
  width: 245px;
}

.txt {
  font-weight: 800;
}

.img-betalningmetos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}
.img-betalningmetos img {
  margin: 10px auto;
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

  .container-info {
    width: 80%;
    height: 700px;
  }

  #namnPåKort,
  #kortnummer {
    width: 300px;
  }
  #år,
  #månad,
  #cvc {
    width: 150px;
  }

  .vidare-btn {
    height: 40px;
    width: 100px;
    font-size: 20px;
  }
  #back-icon {
    font-size: 40px;
    margin-left: 0;
    margin-top: 400px;
  }
}
</style>
