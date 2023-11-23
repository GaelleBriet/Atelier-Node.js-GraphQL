<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { usePointOfSaleStore } from "../stores/pointOfSale";
import FormSelect from "../components/formkit/FormSelect.vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// const { result } = useQuery(
//   gql`
//     query ExampleQuery($bikeId: Int!) {
//       bike(id: $bikeId) {
//         number
//       }
//     }
//   `,
//   {
//     bikeId: 1
//   }
// );
// watch(
//   () => result.value,
//   newValue => {
//     console.log(newValue);
//   }
// );

const { result } = useQuery(
  gql`
    query getPointOfSales {
      point_of_sales {
        id
        label
      }
    }
  `,
);
watch(
  () => result.value,
  newValue => {
    console.log(newValue);
  }
);

const pointOfSaleStore = usePointOfSaleStore();
const pointOfSaleIsSelected = ref(pointOfSaleStore.pointOfSaleSelected);

const selectPointOfSale = () => {
  pointOfSaleStore.setPointOfSaleSelected();
};

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
      <p v-if="result && result.point_of_sales">
        <p>{{ result.pointOfSales }}</p>
        <p v-for="pointOfSale of result.point_of_sales" :key="pointOfSale.id">{{ pointOfSale.label }}</p>
      </p>
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
