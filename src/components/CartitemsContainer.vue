<template>
    <CartItem v-for="item in items"/>
</template>


<script>
import CartItem from '../components/CartItem.vue'

export default {
    data() {
        return {
            cartItemsList: []
        }
    }
}
</script>
<style scoped></style>
