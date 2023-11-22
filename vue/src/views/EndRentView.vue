<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import FormText from "../components/formkit/FormText.vue";
import FormSelect from "../components/formkit/FormSelect.vue";

const router = useRouter();

const currentStep = ref(1);
const submitButtonLabel = ref("Suivant");

const onSubmit = () => {
  currentStep.value++;
  submitButtonLabel.value = "Enregistrer";
  if (currentStep.value === 2) {
    //
  }
};
</script>

<template>
  <div class="container ps-5">
    <TitleComponent title="Récupérer une location" />
    <FormKit type="form" @submit="onSubmit" :submit-label="submitButtonLabel">
      <div class="col-6">
        <FormText :label="'Numéro du vélo'" :placeholder="'Vélo'" />
      </div>
      <template v-if="currentStep === 2">
        <div>
          <p>Nom :<span>Hapeuprait</span></p>
          <p>Prénom :<span>Jean-Michel</span></p>
          <p>Loué au point de vente :<span></span></p>
          <p>Date de retour prévue :<span>24/07/2021</span></p>
          <FormSelect :label="'Retour au point de vente'" :options="['Aix-en-Provence - Parc Jourdan', '2', '3']" />
        </div>
      </template>
    </FormKit>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
