import { defineStore } from "pinia";

export interface PointOfSaleState {
  pointOfSaleSelected: boolean;
  selectedPointOfSale: string;
}

export const usePointOfSaleStore = defineStore("pointOfSale", {
  state: (): PointOfSaleState => ({
    pointOfSaleSelected: false,
    selectedPointOfSale: ""
  }),
  getters: {
    getSelectedPointOfSale: (state: PointOfSaleState): string => {
      return state.selectedPointOfSale;
    }
  },
  actions: {
    setPointOfSaleSelected(this: PointOfSaleState): void {
      this.pointOfSaleSelected = true;
    },
    setSelectedPointOfSale(this: PointOfSaleState, selectedPointOfSale: string): void {
      this.selectedPointOfSale = selectedPointOfSale;
    }
  }
});
