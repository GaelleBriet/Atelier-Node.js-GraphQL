<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="container-title">
    {{ title }}
  </div>
</template>
