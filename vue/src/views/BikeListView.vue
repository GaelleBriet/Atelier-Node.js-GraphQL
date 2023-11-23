<script setup lang="ts">
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";
import DataGridComponent from "../components/DataGridComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import { watch, onMounted, computed } from "vue";
import { apolloService } from "../services/apollo.service";

const router = useRouter();
const bikeResponse = apolloService.getBikes();

const formatedBikesData = computed(() => {
  return (
    bikeResponse.result.value?.bikes.map(bike => ({
      Numéro: bike.number,
      Type: bike.kind.label,
      "Prix EUR": "",
      "Prix USD": "",
      Statut: bike.status,
      "Point de vente": bike.shop.label
    })) || []
  );
});


const filterTypeData = [
  { id: 1, label: "Gazelle" },
  { id: 2, label: "Vélo avec remorque" },
  { id: 3, label: "Électrique" }
];

const filterStatusData = [
  { id: 1, label: "En location" },
  { id: 2, label: "Disponible" },
  { id: 3, label: "En réparation" }
];

const filterPointOfSale = [
  { id: 1, label: "Aix-en-Provence - Parc Jourdan" },
  { id: 2, label: "Marseille" },
  { id: 3, label: "3" }
];

const handleActionClick = rowIndex => {
  const selectedRow = bikesData[rowIndex];
  if (selectedRow && selectedRow.id !== undefined) {
    const bikeId = selectedRow.id;
    router.push({ name: "bike", params: { id: bikeId } });
  } else {
    console.error("No bike selected");
  }
};

const onFilter = () => {
  console.log("filter");
};

watch(
  () => bikeResponse.result.value,
  newValue => {
    console.log(newValue);
  }
);
onMounted(() => {
  bikeResponse.loadMore();
});
</script>

<template>
  <div class="container ps-5 pt-3">
    <TitleComponent :title="'Liste des vélos'" />
    <FilterComponent
      :button-label="'Filtrer'"
      :type-options="filterTypeData"
      :status-options="filterStatusData"
      :point-of-sale-options="filterPointOfSale"
      :results="bikeResponse.result.value?.bikes.length || 0"
      @submit="onFilter"
    />
    <div v-if="bikeResponse.result.value && bikeResponse.result.value.bikes">
      <p v-for="bike of bikeResponse.result.value.bikes" :key="bike.id">
      </p>
    </div>
    <div>
      <DataGridComponent
        :columns="['Numéro', 'Type', 'Prix EUR', 'Prix USD', 'Statut', 'Point de vente', 'Actions']"
        :data="formatedBikesData"
        :action-button="true"
        @action-click="handleActionClick"
      />
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
