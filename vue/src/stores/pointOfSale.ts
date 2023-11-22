import { defineStore } from "pinia";

export interface PointOfSaleState {
  pointOfSaleSelected: boolean;
  name: string;
}

export const usePointOfSaleStore = defineStore("pointOfSale", {
  state: function (): PointOfSaleState {
    return {
      pointOfSaleSelected: false,
      name: "Aix-en-Provence - Parc Jourdan"
    };
  },
  getters: {
    getPointOfSaleSelected: function (state: PointOfSaleState): boolean {
      return state.pointOfSaleSelected;
    },
    getName: function (state: PointOfSaleState): string {
      return state.name;
    }
  },
  actions: {
    setPointOfSaleSelected: function (this: PointOfSaleState): void {
      this.pointOfSaleSelected = true;
    }
  }
});