<script setup lang="ts">
defineProps<{
  name: string,
  id: string,
  label: string,
  help: string,
  placeholder: string,
}>();
</script>

<template>
  <div>
    <FormKit 
      :id="id" 
      type="text"
      :name="name"
      :label="label"
      :help="help"
      :placeholder="placeholder"
      >
    </FormKit>
  </div>
</template>
