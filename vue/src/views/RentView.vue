<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import FormkitText from "../components/formkit/FormkitText.vue";
</script>

<template>
  <div class="container">
    <TitleComponent :title="'Démarrer une location'" />
    <form>
      <FormkitText :label="'Nom du client'" :placeholder="'Nom'" />
      <FormkitText :label="'Prénom du client'" :placeholder="'Prénom'" />
      <FormkitText :label="'Numéro du vélo'" :placeholder="'Vélo'" />
      <FormkitText :label="'Date de retour prévue'" />
    </form>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
