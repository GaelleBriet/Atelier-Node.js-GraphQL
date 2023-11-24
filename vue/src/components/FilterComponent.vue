<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";
import { ref } from "vue";

const selectedType = ref(null);
const selectedStatus = ref(null);
const selectedPointOfSale = ref(null);

defineProps<{
  buttonLabel: string;
  typeOptions: { id: number; label: string }[];
  statusOptions: { id: number; label: string }[];
  pointOfSaleOptions: { id: number; label: string }[];
  results: number;
}>();

const emit = defineEmits<{
  (e: "submit", value: { type: string | null; status: string | null; pointOfSale: string | null }): void;
}>();

const handlesubmit = () => {
  emit("submit", {
    type: selectedType.value,
    status: selectedStatus.value,
    pointOfSale: selectedPointOfSale.value
  });
};
</script>
<template>
  <div>
    <FormKit type="form" :submit-label="buttonLabel" @submit="handlesubmit">
      <FormSelect v-model="selectedType" :label="'Type'" :options="typeOptions" />
      <FormSelect v-model="selectedStatus" :label="'Statut'" :options="statusOptions" />
      <FormSelect v-model="selectedPointOfSale" :label="'Point de vente'" :options="pointOfSaleOptions" />
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
