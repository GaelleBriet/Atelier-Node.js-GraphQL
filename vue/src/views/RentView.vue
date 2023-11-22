<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import FormkitText from "../components/formkit/FormkitText.vue";
import FormSelect from "../components/formkit/FormSelect.vue";
</script>

<template>
  <div class="container">
    <TitleComponent :title="'Démarrer une location'" />
    <FormKit type="form" @submit="onSubmit">
      <div class="row">
        <div class="col-6">
          <FormkitText :label="'Nom du client'" :placeholder="'Nom'" />
        </div>
        <div class="col-6">
          <FormkitText :label="'Prénom du client'" :placeholder="'Prénom'" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <FormkitText :label="'Numéro du vélo'" :placeholder="'Vélo'" />
        </div>
        <div class="col-6">
          <FormSelect :label="'Point de vente'" :options="['Aix-en-Provence - Parc Jourdan', '2', '3']" />
        </div>
      </div>
      <FormkitText :label="'Date de retour prévue'" />
    </FormKit>
  </div>
</template>

<style>
@import "../assets/main.css";

[data-family="button"] .formkit-wrapper {
  padding-top: 3rem;
}

.formkit-wrapper .formkit-input {
  width: 100%;
}
</style>
