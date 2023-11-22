<script setup lang="ts">
defineProps({
  label: String,
  help: String,
  value: {
    type: String,
    default: () => new Date().toISOString().slice(0, 10)
  }
});
</script>
<template>
  <div>
    <FormKit type="date" :value="value" :label="label" :help="help" />
  </div>
</template>
<style></style>
