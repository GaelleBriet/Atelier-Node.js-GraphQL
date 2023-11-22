<script setup lang="ts">
defineProps({
  name: String,
  id: String,
  label: String,
  help: String,
  placeholder: String,
  options: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div>
    <FormKit type="select" :name="name" :id="id" :label="label" :options="options"> </FormKit>
  </div>
</template>

<style>
@import "../../assets/main.css";
.formkit-input {
  cursor: pointer;
}
</style>
