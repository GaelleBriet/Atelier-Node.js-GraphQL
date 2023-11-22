<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { onMounted, watch } from "vue";
import { usePointOfSaleStore } from "../stores/pointOfSale";

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
      <div class="ms-5">
        <p class="ms-1 pt-5">Veuillez renseigner le point de vente :</p>
        <div class="w-40">
          <select class="form-select" aria-label="Choisir un point de vente">
            <option selected>Choisissez votre point de vente</option>
            <option value="1">Aix-en-Provence - Parc Jourdan</option>
          </select>
          <button class="btn btn-secondary mt-3 w-100" @click="selectPointOfSale">Valider</button>
        </div>
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
          <button class="btn btn-warning mb-3">Réceptionner une location</button>
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
