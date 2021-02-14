import { MutationTree } from "vuex";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

export const state = () => ({
  carValue: 0,
  carYearThreshold: CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS,
  addons: [] as CarInsuranceAddOn[],
  insuranceCompany: "",
  insuranceValue: "",
  name: "",
  email: "",
  phone: "",
  note: ""
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
  },

  setInsuranceCompany(state: CarState, payload: string) {
    state.insuranceCompany = payload;
  },

  setInsuranceValue(state: CarState, payload: string) {
    state.insuranceValue = payload;
  },

  setName(state: CarState, payload: string) {
    state.name = payload;
  },

  setEmail(state: CarState, payload: string) {
    state.email = payload;
  },

  setPhone(state: CarState, payload: string) {
    state.phone = payload;
  },

  setNote(state: CarState, payload: string) {
    state.note = payload;
  }
};
