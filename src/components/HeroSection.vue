<template>
  <div class="heroSection">
    <!--     <div class="heroText">
      <h2>Fantastisk heroProdukt</h2>
      <p>Priset är för bra för att vara sant! Rena rama rånet</p>
    </div> -->
    <div class="gridSection">
      <div class="bigContainerMobile"></div>
      <div class="smallContainer">
        <div class="small1">
          <button class="button-50" role="button">Button 50</button>
        </div>
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
    "small1 small2"
    "small3 small4";
}
.small1 {
  display: grid;
  background-color: #f13d3c;
  align-items: center;
  justify-content: center;
}
.small2 {
  background-image: url("https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.small3 {
  background-image: url("https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.small4 {
  background-color: black;
}
.bigContainer {
  background-color: blueviolet;
  background: url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.bigContainerMobile {
  display: none;
  background-image: url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80");
}

.button-50 {
  appearance: button;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  -webkit-user-select: none;
  white-space: nowrap;
}

button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}

@media screen and (max-width: 992px) {
  .gridSection {
    grid-template-areas:
      "bigContainer"
      "smallContainer";
  }

  .bigContainer {
    display: none;
  }
  .bigContainerMobile {
    display: block;
    background-color: blueviolet;
    background: url("https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
