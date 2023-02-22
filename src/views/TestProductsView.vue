<template>
  <div class="products-wrapper">
    <div class="products-container">
      <TestProductItem
        class="product-item"
        v-for="product in products"
        :key="product.id"
        @click="sendId(product.id)"
        :image="product.image"
        :price="product.price"
        :title="product.title"
      />
    </div>
  </div>
</template>

<style>
  .product-item {
    cursor: pointer;
  }
  .products-wrapper {
    background-color: white;
    padding-top: 8rem;
  }
  .products-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 375px) {
    .products-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 500px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 768px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .products-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
</style>

<script>
  import TestProductItem from '../components/TestProductItem.vue'
  import axios from 'axios'
  export default {
    components: {
      TestProductItem
    },
    mounted() {
      this.fetchProducts()
    },
    emits: ['id-selected'],
    methods: {
      sendId(id) {
        console.log(id)
        this.$emit('id-selected', id)
      },
      async fetchProducts() {
        const result = await axios.get('productapi.json', {
          headers: {
            Accept: 'application/json'
          }
        })
        this.products = result.data
      }
    },
    data() {
      return {
        products: []
      }
    }
  }
</script>
