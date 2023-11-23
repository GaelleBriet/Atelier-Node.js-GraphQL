<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import DataGridComponent from "../components/DataGridComponent.vue";

const actualBike = { id: 1, number: "A0001", status: "Disponible", lastPointOfSale: "Aix-en-Provence - Parc Jourdan" };

const bikeHistory = [
  { departure: "Sunnydale", departureDate: "01/09/2021", arrival: "Rivendell", arrivalDate: "01/09/2021" },
  { departure: "Emerald City", departureDate: "02/09/2021", arrival: "Atlantis", arrivalDate: "02/09/2021" },
  { departure: "Neverland", departureDate: "03/09/2021", arrival: "El Dorado", arrivalDate: "03/09/2021" },
  { departure: "Shangri-La", departureDate: "04/09/2021", arrival: "Camelot", arrivalDate: "04/09/2021" },
  { departure: "Valhalla", departureDate: "05/09/2021", arrival: "Elysium", arrivalDate: "05/09/2021" }
];

const handleActionClick = () => {
  console.log("action click");
};
</script>

<template>
  <div class="container ps-5 pt-3">
    <TitleComponent :title="`Vélo ${actualBike.number}`" />
    <div>
      <p>Dernier point de vente : <span v-html="actualBike.lastPointOfSale"></span></p>
      <p>Statut : <span v-html="actualBike.status"></span></p>
      <p>Historique des locations</p>
    </div>
    <div>
      <DataGridComponent
        :columns="['Départ de ', 'Date', 'Retour à', 'Date']"
        :data="bikeHistory"
        :action-button="false"
        @action-click="handleActionClick"
      />
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
