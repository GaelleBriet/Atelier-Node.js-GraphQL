<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { onMounted, watch } from "vue";
import { usePointOfSaleStore } from "../stores/pointOfSale";
import FormSelect from "../components/formkit/FormSelect.vue";

const router = useRouter();
const pointOfSaleStore = usePointOfSaleStore();
const pointOfSaleIsSelected = ref(pointOfSaleStore.pointOfSaleSelected);

const selectPointOfSale = () => {
  pointOfSaleStore.setPointOfSaleSelected(true);
};

// onMounted(() => {
//   if (!pointOfSaleIsSelected) {
//     appStore.setPointOfSaleSelected(false);
//   }
// });

watch(
  () => pointOfSaleStore.pointOfSaleSelected,
  newValue => {
    pointOfSaleIsSelected.value = newValue;
  }
);
</script>

<template>
  <template v-if="!pointOfSaleIsSelected">
    <div class="container home-container">
      <div class="w-40 ps-5 pt-5">
        <FormKit type="form" @submit="selectPointOfSale">
          <FormSelect
            :label="'Veuillez sélectionner votre point de vente'"
            :options="['Aix-en-Provence - Parc Jourdan', '2', '3']"
          />
        </FormKit>
      </div>
    </div>
  </template>

  <template v-if="pointOfSaleIsSelected">
    <div class="container home-container my-5">
      <div class="container py-5 px-5">
        <div>
          <p>Votre connexion actuelle est liée au point de vente suivant :</p>
          <p class="text-color-pink fw-bold">Aix-en-Provence - Parc Jourdan</p>
          <button class="btn btn-secondary">Changer de point de vente</button>
        </div>
        <div class="btn-container">
          <router-link to="/location-start" class="btn btn-success mb-3">Démarrer une location</router-link>
          <router-link to="/location-end" class="btn btn-warning mb-3">Réceptionner une location</router-link>
          <button class="btn btn-primary mb-3">Voir tous les vélos</button>
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
