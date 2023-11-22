import { defineStore } from "pinia";

export const usePointOfSaleStore = defineStore("pointOfSale", {
  state: () => ({
    pointOfSaleSelected: false,
    name: "Aix-en-Provence - Parc Jourdan"
  }),
  getters: {
    getPointOfSaleSelected() {
      return this.pointOfSaleSelected;
    },
    getName() {
      return this.name;
    }
  },
  actions: {
    setPointOfSaleSelected() {
      this.pointOfSaleSelected = true;
    }
  }
});
