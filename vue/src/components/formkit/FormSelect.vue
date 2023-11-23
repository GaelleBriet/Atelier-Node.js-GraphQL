<script setup lang="ts">
defineProps<{
  name: string;
  id: string;
  label: string;
  help: string;
  placeholder: string;
  options: Array<string>;
}>();
</script>

<template>
  <div>
    <FormKit :id="id" type="select" :name="name" :label="label" :options="options"> </FormKit>
  </div>
</template>

<style>
@import "../../assets/main.css";
.formkit-input {
  cursor: pointer;
}
</style>
