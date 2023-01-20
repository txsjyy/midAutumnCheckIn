<template>
  <div class = "flex flex-col min-h-screen bg-primary">
    <Checkin/>
    <RouterView/>
  </div>
</template>

<script setup>
import {RouterView } from 'vue-router'
import Checkin from './components/checkin.vue';
</script>

<style lang="scss" scoped>

</style>