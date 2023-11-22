<script setup></script>

<template>
  <div class="container home-container my-5">
    <div class="container py-5 px-5">
      <div>
        <p>Votre connexion actuelle est liée au point de vente suivant :</p>
        <p class="text-color-pink fw-bold">Aix-en-Provence - Parc Jourdan</p>
        <button class="btn btn-secondary">Changer de point de vente</button>
      </div>
      <div class="btn-container">
        <button class="btn btn-success mb-3">Démarrer une location</button>
        <button class="btn btn-warning mb-3">Réceptionner une location</button>
        <button class="btn btn-primary mb-3">Voir tous les vélos</button>
      </div>
    </div>
  </div>
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
  max-height: 100%;
}
</style>
