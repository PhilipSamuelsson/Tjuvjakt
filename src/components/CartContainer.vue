<script>
import CartitemsContainer from "./CartitemsContainer.vue";

export default {
  components: {
    CartitemsContainer,
  },
};
</script>
<template>
  <div class="container">
    <h2 class="cartHeader">Varukorg</h2>
    <button @click="$store.commit('toggleCart')" class="close">&times;</button>
    <div class="cart-container">
        <CartitemsContainer />
    </div>
    <p>Du har inga stöldgods i varukorgen</p>
    <button class="button-50" role="button">Till kassan</button>
  </div>
</template>

<style scoped>
.close {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 20px;
  background: none;
  border: none;
  font-size: 40px;
}
.container {
  width: 375px;
  /*    OBS! HARD CODED HEIGHT FOR TESTING */
  height: 600px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 99;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.cart-item-holder {
  width: 500px;
  height: 400px;
  background-color: yellow;
  z-index: 100;
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
  margin-bottom: 20px;
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

.cart-container{
    width: 100%;
    max-height: 300px;
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
}
</style>
