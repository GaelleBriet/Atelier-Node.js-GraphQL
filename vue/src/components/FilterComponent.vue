<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";

defineProps<{
  buttonLabel: string;
  typeOptions: string[];
  statusOptions: string[];
  pointOfSaleOptions: string[];
}>();

const emit = defineEmits<{
  (e: "submit"): void;
}>();

const handlesubmit = () => {
  emit("submit");
};
</script>
<template>
  <div>
    <FormKit type="form" :submit-label="buttonLabel" @submit="handlesubmit">
      <FormSelect :label="'Type'" :options="['Tous', ...typeOptions.map(option => option.label)]" />
      <FormSelect :label="'Statut'" :options="['Tous', ...statusOptions.map(option => option.label)]" />
      <FormSelect :label="'Point de vente'" :options="['Tous', ...pointOfSaleOptions.map(option => option.label)]" />
    </FormKit>
    <div class="results">Nombre de résultats</div>
  </div>
</template>

<style scoped>
.formkit-form {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-bottom: 10px;
}
.results {
  margin-bottom: 2rem;
  margin-left: 2.2rem;
}

[data-type="select"].formkit-outer {
  width: 200px;
}
</style>
