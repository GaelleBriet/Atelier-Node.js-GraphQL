<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from "./components/NavBarComponent.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <NavBarComponent />
  <HomeView />
</template>

<style>
@import "./assets/main.css";
</style>
