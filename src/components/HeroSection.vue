<template>
  <div class="heroSection">
    <!--     <div class="heroText">
      <h2>Fantastisk heroProdukt</h2>
      <p>Priset är för bra för att vara sant! Rena rama rånet</p>
    </div> -->
    <div class="gridSection">
      <div class="smallContainer">
        <div class="small1"></div>
        <div class="small2"></div>
        <div class="small3"></div>
        <div class="small4"></div>
      </div>
      <div class="bigContainer"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.heroSection {
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
/* .heroText {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
} */
.gridSection {
  height: 100%;
  width: 100%;
  border: 5px solid green;
  display: grid;
  grid-template-areas: "smallContainer bigContainer";
}
.gridSection div {
  position: relative;
}
.smallContainer {
  position: relative;
  display: grid;
  grid-template-areas:
    " small1 small2 "
    " small3 small4 ";
}
.small1 {
  background-color: black;
}
.small2 {
  background-color: red;
}
.small3 {
  background-color: blue;
}
.small4 {
  background-color: green;
}
.bigContainer {
  background-color: blueviolet;
}

@media screen and (max-width: 992px) {
  .gridSection {
    grid-template-areas:
      "bigContainer"
      "smallContainer";
  }
}
</style>
