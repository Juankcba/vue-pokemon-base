<template>
  <h1>Counter View: {{ counter }}</h1>
  <button @click="increase">+1</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

  const counter = ref(5);
  const increase = () => {
    counter.value ++;
  }
</script>

<style>

</style>