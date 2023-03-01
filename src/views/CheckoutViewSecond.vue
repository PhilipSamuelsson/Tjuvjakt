<script>
export default {
  data() {
    return {
      goToNextPage() {
        this.$router.push("/checkoutThird");
      },
    };
  },
};
</script>
<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />

  <div>
    <router-link to="/checkout"
      ><i class="bx bx-chevron-left" id="back-icon"></i
    ></router-link>
    <RouterLink to="/CheckoutThird">
      <i @click="goToNextPage" class="bx bx-chevron-right" id="next-icon"></i
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

  <div class="containerTwo">
    <h6>Fraktmetod</h6>
    <div class="col">
      <div>
        <input id="fraktmetodFirst" type="radio" value="" name="x" />
        <lable for="fraktmetodFirst">$2.99</lable>
      </div>
      <div>
        <p style="font-size: 11px; margin:auto;">
          USPS 1st Class With Tracking <br>(5-13 days) COVID19 Delay
        </p>
      </div>
      <div><img src="../assets/img/Fraktmetod1.PNG" alt="" /></div>
    </div>

    <div class="col">
      <div>
        <input id="fraktmetodSecond" type="radio" value="" name="x" />
        <lable for="fraktmetodSecond">$9.00</lable>
      </div>
      <div>
        <p style="font-size: 11px; margin:auto;">
          USPS PRIORITY With Tracking <br /> (5 - 10 days) COVID 19 Delay
        
        </p>
      </div>
      <div><img src="../assets/img/Fraktmetod2.PNG" alt="" /></div>
    </div>
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
  margin-top: 10px;
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
  margin:100px auto;
  width: 600px;
  height: 220px;
  box-shadow: 1px 1px 2px 2px rgb(226, 226, 226);
}

.col{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:20px auto;
  border: 1px solid black;
  height: 60px;
  width: 400px;
}

input, lable{
  margin-left: 10px;
}

#back-icon {
  position: absolute;
  margin-top: 300px;
  margin-left: 200px;
  font-size: 80px;
}

#next-icon {
  position: absolute;
  margin-top: 300px;
  margin-left: 1230px;
  font-size: 80px;
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

  .containerTwo {
    width: 80%;
  }

  .col {
    width: 300px;
  }

  #back-icon {
    font-size: 40px;
    margin-left: 0;
    margin-top: 400px;
  }
}
</style>
