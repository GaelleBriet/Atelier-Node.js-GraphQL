<script setup lang="ts">
import TitleComponent from "../components/TitleComponent.vue";
import FormText from "../components/formkit/FormText.vue";
import FormSelect from "../components/formkit/FormSelect.vue";
import FormDate from "../components/formkit/FormDate.vue";
import { ref, watch } from "vue";
import { apolloService } from "../services/apollo.service";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const pointOfSalesResponse = apolloService.getPointOfSales();

const lastname = ref("");
const firstname = ref("");
const bike = ref("");
const shop = ref("");
const date = ref("");

const onSubmit = () => {
  const variables = {
    data: {
      client: {
        firstname: firstname.value,
        lastname: lastname.value
      },
      bike_number: bike.value,
      schedule: {
        due: new Date(date.value)
      },
      lessor: parseInt(shop.value)
    }
  };
  createRent(variables)
    .then(() => {
      alert("Location créée avec succès");
    })
    .catch(() => {
      alert("Erreur lors de la création de la location");
    });
};

const { mutate: createRent } = useMutation(gql`
  mutation createRent($data: CreateRentInput!) {
    createRent(data: $data) {
      id
      client {
        firstname
        lastname
      }
      bike {
        number
      }
      lessor {
        id
      }
      schedule {
        due
      }
    }
  }
`);

watch(
  () => pointOfSalesResponse.value,
  newValue => {
    console.log(newValue);
  }
);
</script>

<template>
  <div class="container ps-5 pt-3">
    <TitleComponent :title="'Démarrer une location'" />
    <FormKit type="form" @submit="onSubmit">
      <div class="row">
        <div class="col-6">
          <FormText v-model="lastname" :label="'Nom du client'" :placeholder="'Nom'" />
        </div>
        <div class="col-6">
          <FormText v-model="firstname" :label="'Prénom du client'" :placeholder="'Prénom'" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <FormText v-model="bike" :label="'Numéro du vélo'" :placeholder="'Vélo'" />
        </div>
        <div v-if="pointOfSalesResponse && pointOfSalesResponse.point_of_sales" class="col-6">
          <FormSelect v-model="shop" :label="'Point de vente'" :options="pointOfSalesResponse.point_of_sales" />
        </div>
      </div>
      <FormDate v-model="date" :label="'Date de retour prévue'" />
    </FormKit>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
../apolloClient.js
