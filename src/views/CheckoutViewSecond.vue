// <script>
// export default {
//   data() {
//     return {
//       goToNextPage(){
//         this.$router.push('/checkoutthird')
//       }
//     }
//   },
// }
// </script>
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
    <h4>Fraktmetod</h4>
    <div class="firstContent"></div>

    <div class="secondContent"></div>
  </div>
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
  margin: 30px ;
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
#circle-correctThree, #circle-correctFour{
  background-color: rgb(229, 242, 250);
}

.containerTwo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
  width: 60%;
  height: 250px;
  box-shadow: 1px 1px 2px 2px rgb(226, 226, 226);
}

.firstContent,
.secondContent {
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  margin: auto;
  border: 1px solid black;
  height: 60px;
  width: 400px;
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
}
</style>
