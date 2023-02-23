<template>
    <div class="grid-container">
        <div class="grid-item part1">
         <div>PRODUKTernas produkter</div>
        </div>
        <div class="grid-item part2">
            <ul>
                <li>Title</li>
                <li>Kategori</li>
                <li>Pris</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
 name: 'CartItem',
 props: {
 }
}</script>

<style scoped>
.grid-container {

    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "part1 part2";

}

.grid-item {
    z-index: 1000;

    background-color: green;

}

</style>
