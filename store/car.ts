import { MutationTree } from "vuex";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

export const state = () => ({
  carValue: 0,
  carYearThreshold: CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
  addons: [] as CarInsuranceAddOn[]
});

export type CarState = ReturnType<typeof state>;

export const mutations: MutationTree<CarState> = {
  setCarValue(state: CarState, payload: number) {
    state.carValue = payload;
  },

  setCarYearThreshold(state: CarState, payload: CarYearThreshold) {
    state.carYearThreshold = payload;
  },

  setAddons(state: CarState, payload: CarInsuranceAddOn[]) {
    state.addons = payload;
  }
};