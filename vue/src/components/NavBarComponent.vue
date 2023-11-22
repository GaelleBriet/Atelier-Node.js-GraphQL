<script setup></script>

<template>
  <div>
    <header class="navbar d-flex align-items-center justify-content-center justify-content-md-between">
      <a href="/" class="d-flex align-items-center text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">vélO'</span>
      </a>

      <ul class="nav nav-pills align-content-center">
        <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Accueil</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Liste de vélos</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Démarrer une location</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Terminer une location</a></li>
      </ul>

      <div class="me-5">
        <p>Point de vente</p>
        <span>Nom du PDV</span>
        <li class="nav-link">Changer</li>
      </div>
    </header>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
