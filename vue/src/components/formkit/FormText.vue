<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

defineProps<{
  modelValue: string;
  name?: string;
  id?: string;
  label?: string;
  help?: string;
  placeholder?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const inputValue = ref("");

const updateValue = value => {
  inputValue.value = value;
  emits("update:modelValue", inputValue.value);
};
</script>

<template>
  <div>
    <FormKit
      :id="id"
      :value="inputValue"
      type="text"
      :name="name"
      :label="label"
      :help="help"
      :placeholder="placeholder"
      @input="updateValue"
    >
    </FormKit>
  </div>
</template>
