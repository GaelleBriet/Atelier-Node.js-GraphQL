<script setup lang="ts">
defineProps({
  name: String,
  id: String,
  label: String,
  help: String,
  placeholder: String,
});
</script>

<template>
  <div>
    <FormKit 
      type="text" 
      :name="name"
      :id="id"
      :label="label"
      :help="help"
      :placeholder="placeholder"
      >
    </FormKit>
  </div>
</template>
