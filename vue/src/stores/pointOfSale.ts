import { defineStore } from "pinia";

export interface PointOfSaleState {
  pointOfSaleSelected: boolean;
  name: string;
}

export const usePointOfSaleStore = defineStore("pointOfSale", {
  state: (): PointOfSaleState => ({
    pointOfSaleSelected: false,
    name: "Aix-en-Provence - Parc Jourdan"
  }),
  getters: {
    getPointOfSaleSelected: (state: PointOfSaleState): boolean => {
      return state.pointOfSaleSelected;
    },
    getName: (state: PointOfSaleState): string => {
      return state.name;
    }
  },
  actions: {
    setPointOfSaleSelected(this: PointOfSaleState): void {
      this.pointOfSaleSelected = true;
    }
  }
});
