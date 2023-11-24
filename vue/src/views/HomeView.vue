<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { usePointOfSaleStore } from "../stores/pointOfSale";
import FormSelect from "../components/formkit/FormSelect.vue";
import { apolloService } from "../services/apollo.service";

const pointOfSalesResponse = apolloService.getPointOfSales();

const pointOfSaleStore = usePointOfSaleStore();
const pointOfSaleIsSelected = ref(pointOfSaleStore.pointOfSaleSelected);

const selected = ref("");
const selectedPointOfSaleLabel = ref("");

const selectPointOfSale = () => {
  pointOfSaleIsSelected.value = true;
  const selectedPointOfSaleId = Number(selected.value) - 1;
  selectedPointOfSaleLabel.value = pointOfSalesResponse.value.point_of_sales[selectedPointOfSaleId].label;
  pointOfSaleStore.setSelectedPointOfSale(selectedPointOfSaleLabel.value);
};

const resetSelection = () => {
  pointOfSaleIsSelected.value = false;
  selected.value = "";
  selectedPointOfSaleLabel.value = "";
  pointOfSaleStore.setSelectedPointOfSale("");
};

watch(
  () => pointOfSalesResponse.value,
  newValue => {
    console.log(newValue);
  }
);

watch(
  () => pointOfSaleStore.pointOfSaleSelected,
  newValue => {
    pointOfSaleIsSelected.value = newValue;
    console.log("pointOfSaleIsSelected in HomeView:", newValue);
  }
);
</script>

<template>
  <template v-if="!pointOfSaleIsSelected">
    <div class="container home-container">
      <div v-if="pointOfSalesResponse && pointOfSalesResponse.point_of_sales">
        <div class="w-40 ps-5 pt-5">
          <FormKit type="form" @submit="selectPointOfSale()">
            <FormSelect
              v-model="selected"
              :label="'Veuillez sélectionner votre point de vente'"
              :options="pointOfSalesResponse.point_of_sales"
              :placeholder="'Point de vente'"
            />
          </FormKit>
        </div>
      </div>
    </div>
  </template>

  <template v-if="pointOfSaleIsSelected">
    <div class="container home-container my-5">
      <div class="container py-5 px-5">
        <div>
          <p>Votre connexion actuelle est liée au point de vente suivant :</p>
          <p class="text-color-pink fw-bold">{{ selectedPointOfSaleLabel }}</p>
          <button class="btn btn-secondary" @click="resetSelection">Changer de point de vente</button>
        </div>
        <div class="btn-container">
          <router-link to="/location-start" class="btn btn-success mb-3">Démarrer une location</router-link>
          <router-link to="/location-end" class="btn btn-warning mb-3">Réceptionner une location</router-link>
          <router-link class="btn btn-primary mb-3" to="/bikes-list">Voir tous les vélos</router-link>
        </div>
      </div>
    </div>
  </template>
</template>

<style>
@import "../assets/main.css";

.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  align-items: stretch;
}
.home-container {
  height: 100%;
}
.form-select {
  width: 100%;
  margin-top: 20px;
}
</style>
