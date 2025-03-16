<script setup>
import { ref } from 'vue'
let value = ref(0);
const increment = () => value.value++;
const decrement = () => value.value--;
</script>

<template>
    <h1>Counter App</h1>
    <p>Value is: {{ value }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
</template>