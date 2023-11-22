<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";

const props = defineProps<{
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
    <FormKit
      type="form"
      @submit="handlesubmit"
      :submit-label="buttonLabel"
      :submit-attrs="{ inputClass: 'classe-test1', wrapperClass: 'action-btn' }"
    >
      <FormSelect :label="'Type'" :options="['Tous', ...typeOptions.map(option => option.label)]" />
      <FormSelect :label="'Statut'" :options="['Tous', ...statusOptions.map(option => option.label)]" />
      <FormSelect :label="'Point de vente'" :options="['Tous', ...pointOfSaleOptions.map(option => option.label)]" />
    </FormKit>
    <div class="results">Nombre de résultats</div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";
.formkit-form {
  background-color: aqua;
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
</style>
<style>
[data-type="select"] .formkit-wrapper .formkit-inner {
  width: 200px;
}
</style>
