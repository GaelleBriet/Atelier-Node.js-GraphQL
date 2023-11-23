<script setup lang="ts">
defineProps<{
  label?: string,
  help?: string,
  value?: string,
}>();
</script>
<template>
  <div>
    <FormKit type="date" :value="value" :label="label" :help="help" />
  </div>
</template>
<style></style>
