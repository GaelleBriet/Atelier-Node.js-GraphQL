<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";

defineProps<{
  buttonLabel: string;
  typeOptions: { id: number; label: string }[];
  statusOptions: { id: number; label: string }[];
  pointOfSaleOptions: { id: number; label: string }[];
  results: number;
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
      <FormSelect :label="'Type'" :options="typeOptions" />
      <FormSelect :label="'Statut'" :options="statusOptions" />
      <FormSelect :label="'Point de vente'" :options="pointOfSaleOptions" />
    </FormKit>
    <div class="results">Nombre de résultats : {{ results }}</div>
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
