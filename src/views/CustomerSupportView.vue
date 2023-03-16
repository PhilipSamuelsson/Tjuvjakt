<template>
  <button v-if="selectedOption" @click="backToComplaint" class="back-to">
    <div class="symbol-container">
      <img src="../assets/img/arrow.png" alt="Arrow vector" />
    </div>
    <p>Reklamation</p>
  </button>
  <div class="complaint-wrapper">
    <div v-if="!complaintArea" class="thank-you-container">
      <h1>Tack så mycket för din reklamation!</h1>
      <p>
        Vi är så glada att du väljer att tro på att vi kan lösa ditt problem, du
        ska veta att vi skriver att vi lovar att titta på saken, det var allt.
      </p>
      <RouterLink class="action-btn link" to="/products"
        >Handla lite?</RouterLink
      >
    </div>
    <div v-if="complaintArea" class="main-container">
      <div class="info-container">
        <h1 v-if="addComplaintView" class="info-header">Du vill reklamera:</h1>
        <h2 v-if="addComplaintView" class="info-header">{{ complaint }}</h2>
        <h1 v-if="!addComplaintView" class="info-header">Reklamation</h1>
        <p v-if="!addComplaintView" class="info-text">
          Vår kundsupport är alltid tillgängliga, när de inte är upptagna. När
          du kontaktar oss, var beredd på att uppge alla dina uppgifter som
          BankId, bankuppgifter, lösenord mm.
        </p>
      </div>
      <div class="selection-container">
        <div v-if="addComplaintView" class="selection-input">
          <p>Skriv in dina uppgifter som:</p>
          <ul>
            <li>Namn</li>
            <li>Adress</li>
            <li>Email</li>
            <li>BankId</li>
            <li>Bankuppgifter</li>
            <li>Lösenord</li>
            <li>Vilka tider du inte är hemma</li>
          </ul>
          <input type="text" placeholder="Skriv dina uppgifter här" />
        </div>
        <h6 v-if="addComplaintView" class="info-text">
          Beskriv ditt problem, gärna så kort som möjligt så får vi se ifall vi
          kan eller vill svara
        </h6>
        <textarea
          v-if="addComplaintView"
          class="selection-input"
          :placeholder="complaint"
        ></textarea>
        <button
          v-if="addComplaintView"
          @click="sendInComplaint"
          class="action-btn send-btn"
        >
          Skicka in
        </button>
        <h3 v-if="!addComplaintView" class="selection-header">
          Vill du reklamera:
        </h3>
        <div v-if="!addComplaintView" class="selection-buttons">
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
      complaint: "",
      selectedOption: false,
      addComplaintView: false,
      complaintArea: true,
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
      this.complaint = selection;
      this.isSelectedOption();
      this.addComplaint();
    },
    backToComplaint() {
      this.isSelectedOption();
      this.addComplaint();
      this.complaintArea = true;
    },
    isSelectedOption() {
      this.selectedOption = !this.selectedOption;
    },
    addComplaint() {
      this.addComplaintView = !this.addComplaintView;
    },
    sendInComplaint() {
      this.complaintArea = false;
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

.thank-you-container {
  max-width: 600px;
  text-align: center;
  margin: 0 1rem;
}

.thank-you-container p {
  padding-bottom: 1rem;
  margin: 0 1rem;
}

.info-container {
  max-width: 500px;
  padding-bottom: 5rem;
}

.info-header {
  padding-bottom: 1rem;
}

.info-text {
  padding: 1rem 0;
}

.selection-buttons {
  display: grid;
}

.send-btn,
.complaint-btn {
  border: 3px solid #000000;
  margin: 0.3rem 0;
}

.send-btn {
  float: right;
}
.selection-input {
  display: grid;
}

.selection-input input {
  border: 1px solid #000000;
  margin: 0.4rem 0;
}

textarea {
  border: 1px solid #000000;
  width: 100%;
  min-height: 200px;
}

.selection-input ul {
  padding: 0;
  list-style: none;
  font-weight: bold;
}

.selection-input p {
  margin: 0;
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
