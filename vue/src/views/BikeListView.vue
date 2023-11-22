<script setup lang="ts">
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";
import DataGridComponent from "../components/DataGridComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";

const router = useRouter();
const bikesData = [
  { id: 1, numéro: "A001", type: "type 1", prixEUR: 10, prixUSD: 12, statut: "Disponible", pointDeVente: "Aix" },
  { id: 2, numéro: "A002", type: "type 2", prixEUR: 20, prixUSD: 24, statut: "Disponible", pointDeVente: "Aix" },
  { id: 3, numéro: "A003", type: "type 3", prixEUR: 30, prixUSD: 36, statut: "Disponible", pointDeVente: "Aix" },
  { id: 4, numéro: "A004", type: "type 4", prixEUR: 40, prixUSD: 48, statut: "Disponible", pointDeVente: "Aix" },
  { id: 5, numéro: "A005", type: "type 5", prixEUR: 50, prixUSD: 60, statut: "Disponible", pointDeVente: "Aix" }
];

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
</script>

<template>
  <div class="container ps-5 pt-3">
    <TitleComponent :title="'Liste des vélos'" />
    <FilterComponent
      :buttonLabel="'Filtrer'"
      @submit="onFilter"
      :typeOptions="filterTypeData"
      :statusOptions="filterStatusData"
      :pointOfSaleOptions="filterPointOfSale"
    />
    <div>
      <DataGridComponent
        :columns="['Numéro', 'Type', 'Prix EUR', 'Prix USD', 'Statut', 'Point de vente', 'Actions']"
        :data="bikesData.map(({ id, ...rest }) => rest)"
        @action-click="handleActionClick"
      />
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
