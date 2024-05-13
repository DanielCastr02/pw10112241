<script setup>
import { RouterView } from 'vue-router'
import MenuView from './views/Menuview.vue'
</script>

<template>
  <header>
    <MenuView></MenuView>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
