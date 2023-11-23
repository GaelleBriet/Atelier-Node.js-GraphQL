<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarComponent.vue";

</script>

<template>
  <NavBarComponent />
  <RouterView />
</template>

<style>
@import "./assets/main.css";
</style>
