<script setup lang="ts">
defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  actionButton: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  (e: "action-click", rowIndex: number): void;
}>();

const handleActionClick = rowIndex => {
  // Vous pouvez ajouter la logique de gestion de l'action ici
  console.log(`Action clicked for row ${rowIndex}`);
  emit("action-click", rowIndex);
};
</script>

<template>
  <div classs="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" scope="col">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(value, columnIndex) in row" :key="columnIndex">{{ value }}</td>
          <td v-if="actionButton">
            <button class="btn btn-primary" @click="handleActionClick(rowIndex)">Détails</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
