<!-- <script setup>
</script> -->

<template>
  <h2>Ditt konto</h2>
  <div class="profileMenu">
    <div class="profileBar">Beställningar</div>
    <div class="profileBar">Returnera artikel</div>
    <div class="profileBar">Adresser</div>
    <div class="profileBar">Betalmetoder</div>
    <div class="profileBar">Kundservice</div>
    <div class="profileBar">Kundservice</div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 700;
  margin-left: 35px;
  margin-top: 50px;
  font-size: 2.5rem;
}
.profileBar {
  border: 1px solid black;
  margin-top: 30px;
  width: 90%;
  height: 50px;
  padding: 10px;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  vertical-align: center;
}

.profileMenu {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
