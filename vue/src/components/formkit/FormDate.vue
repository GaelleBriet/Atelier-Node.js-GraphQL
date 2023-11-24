<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  modelValue?: string;
  label?: string;
  help?: string;
  value?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: string | undefined) => {
  emits("update:modelValue", value);
};
</script>
<template>
  <div>
    <FormKit type="date" :value="value" :label="label" :help="help" @input="updateValue" />
  </div>
</template>
<style></style>
