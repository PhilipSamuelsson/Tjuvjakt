<template>
  <div class="increment-container">
    <button @click="decrement" class="increment-btn">-</button>
    <p class="increment-number">{{ quantity }}</p>
    <button @click="increment" class="increment-btn">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
  },
  computed: {
    quantity() {
      return this.number;
    },
  },
};
</script>
<style>
.increment-container {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
}

.increment-btn {
  background: transparent;
  margin: 0;
  padding: 0;
}
</style>
