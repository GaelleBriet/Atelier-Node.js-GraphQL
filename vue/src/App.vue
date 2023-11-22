<script setup>
import { RouterView } from "vue-router";
import NavBarComponent from "./components/NavBarComponent.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <NavBarComponent />
  <RouterView />
</template>

<style>
@import "./assets/main.css";
</style>
