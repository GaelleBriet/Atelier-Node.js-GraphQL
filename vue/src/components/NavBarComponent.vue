<script setup lang="ts">
import { ref, watch } from "vue";
import { usePointOfSaleStore } from "../stores/pointOfSale";

const pointOfSaleStore = usePointOfSaleStore();

const pointOfSaleName = ref(pointOfSaleStore.name);
const pointOfSaleSelected = ref(pointOfSaleStore.pointOfSaleSelected);

watch(
  () => pointOfSaleStore.name,
  newValue => {
    pointOfSaleName.value = newValue;
    console.log(pointOfSaleName.value);
  }
);

watch(
  () => pointOfSaleStore.pointOfSaleSelected,
  newValue => {
    pointOfSaleSelected.value = newValue;
  }
);
</script>

<template>
  <div>
    <header class="navbar d-flex align-items-center justify-content-center justify-content-md-between">
      <router-link to="/" class="d-flex align-items-center text-decoration-none ms-5">
        <span class="fs-4 logo">vélO'</span>
      </router-link>

      <ul class="nav nav-pills align-content-center">
        <router-link class="nav-item nav-link" to="/">Accueil</router-link>
        <router-link class="nav-item nav-link" to="/bikes">Liste de vélos</router-link>
        <router-link class="nav-item nav-link" to="/location-start">Démarrer une location</router-link>
        <router-link class="nav-item nav-link" to="/location-end">Terminer une location</router-link>
      </ul>

      <div class="me-5">
        <p>Point de vente</p>
        <template v-if="pointOfSaleSelected">
          <span v-html="pointOfSaleName"></span>
        </template>
        <span v-else> Aucun point de vente sélectionné</span>
        <li class="nav-link">Changer</li>
      </div>
    </header>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
