<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";
</script>
<template>
  <div>
    <FormKit type="form" @submit="onSubmit" :submit-label="submitButtonLabel">
      <FormSelect :label="'Type'" :options="['Tous', 'type1', 'type2']" />
      <FormSelect :label="'Statut'" :options="['Tous', 'En location', 'Disponible', 'En réparatin']" />
      <FormSelect :label="'Point de vente'" :options="['Tous', 'Aix-en-Provence - Parc Jourdan', '2', '3']" />
    </FormKit>
  </div>
</template>
<style></style>
