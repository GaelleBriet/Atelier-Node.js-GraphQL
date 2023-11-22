<script setup lang="ts">
import FormSelect from "../components/formkit/FormSelect.vue";

const props = defineProps<{
  label: string;
  // options: string[];
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
      :submit-label="label"
      :submit-attrs="{ inputClass: 'classe-test1', wrapperClass: 'action-btn' }"
    >
      <FormSelect :label="'Type'" :options="['Tous', 'type1', 'type2']" />
      <FormSelect :label="'Statut'" :options="['Tous', 'En location', 'Disponible', 'En réparatin']" />
      <FormSelect :label="'Point de vente'" :options="['Tous', 'Aix-en-Provence - Parc Jourdan', '2', '3']" />
    </FormKit>
    <div class="mb-5">Nombre de résultats</div>
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
  margin-bottom: 30px;
}
</style>
<style>
[data-type="select"] .formkit-wrapper .formkit-inner {
  width: 200px;
}
</style>
