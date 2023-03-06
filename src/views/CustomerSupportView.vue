<template>
  <button v-if="selectedOption" @click="backToComplaint" class="back-to">
    <div class="symbol-container">
      <img src="../assets/img/arrow.png" alt="Arrow vector" />
    </div>
    <p>Reklamation</p>
  </button>
  <div class="complaint-wrapper">
    <div class="main-container">
      <div class="info-container">
        <h1 class="info-header">Reklamation</h1>
        <p class="info-text">
          Vår kundsupport är alltid tillgängliga, när de inte är upptagna. När
          du kontaktar oss, var beredd på att uppge alla dina uppgifter som
          BankId, bankuppgifter, lösenord mm.
        </p>
      </div>
      <div class="selection-container">
        <h3 class="selection-header">Vill du reklamera:</h3>
        <div class="selection-buttons">
          <button
            v-for="selection in listOfOptions"
            :key="selection.id"
            @click="selectionComplaint(selection.selection)"
            class="action-btn complaint-btn"
          >
            {{ selection.selection }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedOption: false,
      listOfOptions: [
        { id: 1, selection: "Order" },
        { id: 2, selection: "Produkt" },
        { id: 3, selection: "Betalning" },
        { id: 4, selection: "Leverans" },
        { id: 5, selection: "Annat" },
      ],
    };
  },
  methods: {
    selectionComplaint(selection) {
        console.log(selection)
      this.isSelectedOption()
    },
    backToComplaint() {
      this.isSelectedOption();
    },
    isSelectedOption() {
      this.selectedOption = !this.selectedOption;
    },
  },
};
</script>

<style scoped>
.complaint-wrapper {
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  border: none;
  background: none;
}

.back-to {
  margin: 1rem;
  display: grid;
  grid-template-columns: 40px 1fr;
}

.symbol-container {
  max-width: 30px;
}
.symbol-container img {
  width: 100%;
  height: auto;
}
.main-container {
  margin: 1rem;
  max-width: 1200px;
  display: grid;
}

.info-container {
  max-width: 500px;
  padding-bottom: 5rem;
}

.info-header {
  padding-bottom: 1rem;
}

.selection-buttons {
  display: grid;
}

.complaint-btn {
  border: 3px solid #000000;
  margin: 0.3rem 0;
}

@media (min-width: 700px) {
  .main-container {
    grid-template-columns: 1fr 1fr;
  }
  .info-container {
    padding-right: 5rem;
  }
  .selection-buttons {
    max-width: 400px;
  }
}
</style>
