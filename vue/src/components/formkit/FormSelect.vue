<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  id?: string;
  name?: string;
  label: string;
  help?: string;
  placeholder?: string;
  options: { id: number; label: string }[];
}>();

const emit = defineEmits(["update:modelValue"]);

const transformedOptions = ref({} as Record<number, string>);

watch(
  () => props.options,
  newOptions => {
    if (newOptions) {
      transformedOptions.value = newOptions.reduce(
        (acc, option) => {
          acc[option.id] = option.label;
          return acc;
        },
        {} as Record<number, string>
      );
    }
  },
  { immediate: true }
);

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  if (target) {
    const selectedValue = target.value;
    emit("update:modelValue", selectedValue);
  }
};
</script>

<template>
  <div>
    <FormKit
      :id="id"
      type="select"
      :placeholder="placeholder"
      :name="name"
      :label="label"
      :options="transformedOptions"
      @change="handleChange"
    >
    </FormKit>
  </div>
</template>

<style>
@import "../../assets/main.css";
.formkit-input {
  cursor: pointer;
}
</style>
