<script setup lang="ts">
import { useRouter } from "vue-router";
import TitleComponent from "../components/TitleComponent.vue";
import DataGridComponent from "../components/DataGridComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import { watch, onMounted, computed } from "vue";
import { apolloService } from "../services/apollo.service";

const router = useRouter();
const bikeResponse = apolloService.getBikes();
const typeResponse = apolloService.getKindOfBikes();
const shopResponse = apolloService.getPointOfSales();

const formatedBikesData = computed(() => {
  return (
    bikeResponse.result.value?.bikes.map(bike => ({
      id: bike.id,
      Numéro: bike.number,
      Type: bike.kind.label,
      "Prix EUR": bike.kind.price.euros,
      "Prix USD": bike.kind.price.dollars,
      Statut: bike.status,
      "Point de vente": bike.shop.label
    })) || []
  );
});

const typeOptions = computed(() => {
  return typeResponse.value?.kind_of_bikes.map(kind => ({
    id: kind.id,
    label: kind.label
  }));
});

const shopOptions = computed(() => {
  return shopResponse.value?.point_of_sales.map(shop => ({
    id: shop.id,
    label: shop.label
  }));
});

const filterStatusData = [
  { id: 1, label: "En location" },
  { id: 2, label: "Disponible" },
  { id: 3, label: "En réparation" }
];

const handleActionClick = rowId => {
  const bikeId = rowId + 1;
  router.push(`/bike/${bikeId}`);
};

const onFilter = ({ type, status, pointOfSale }) => {
  console.log("filter", type, status, pointOfSale);
};

watch(
  () => bikeResponse.result.value,
  newValue => {
    console.log(newValue);
  }
);

watch(
  () => typeResponse.value,
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
      :type-options="typeOptions"
      :status-options="filterStatusData"
      :point-of-sale-options="shopOptions"
      :results="bikeResponse.result.value?.bikes.length || 0"
      @submit="onFilter"
    />
    <div v-if="bikeResponse.result.value && bikeResponse.result.value.bikes">
      <p v-for="bike of bikeResponse.result.value.bikes" :key="bike.id"></p>
      <div>
        <DataGridComponent
          :columns="['Numéro', 'Type', 'Prix EUR', 'Prix USD', 'Statut', 'Point de vente', 'Actions']"
          :data="formatedBikesData"
          :action-button="true"
          @action-click="rowId => handleActionClick(rowId)"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
