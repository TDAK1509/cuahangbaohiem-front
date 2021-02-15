import { MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@/store";
import CarInsuranceRequestController, {
  CarYearThreshold,
  CarInsuranceAddOn,
  CarInsuranceRequest
} from "@/controller/car-insurance-request";

const controller = new CarInsuranceRequestController();

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

export const getters: GetterTree<CarState, RootState> = {
  insuranceRequest(state): CarInsuranceRequest {
    const carYearThreshold = controller.getCarYearThresholdLabel(
      state.carYearThreshold
    );
    const addons = state.addons.map((addon) => controller.getAddOnLabel(addon));

    return {
      carValue: state.carValue,
      carYearThreshold,
      addons,
      insuranceCompany: state.insuranceCompany,
      insuranceValue: state.insuranceValue,
      name: state.name,
      email: state.email,
      phone: state.phone,
      note: state.note
    };
  }
};

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

export const actions: ActionTree<CarState, RootState> = {
  async saveRequest({ getters }) {
    const request = getters.insuranceRequest;
    await controller.save(request);
  },

  setCarValue({ commit }, carValue: number) {
    commit("setCarValue", carValue);
  },

  setCarYearThreshold({ commit }, threshold: CarYearThreshold) {
    commit("setCarYearThreshold", threshold);
  },

  setAddons({ commit }, addons: CarInsuranceAddOn[]) {
    commit("setAddons", addons);
  },

  setName({ commit }, name: string) {
    commit("setName", name);
  },

  setEmail({ commit }, email: string) {
    commit("setEmail", email);
  },

  setPhone({ commit }, phone: string) {
    commit("setPhone", phone);
  },

  setNote({ commit }, note: string) {
    commit("setNote", note);
  },

  setInsuranceCompany({ commit }, company: string) {
    commit("setInsuranceCompany", company);
  },

  setInsuranceValue({ commit }, insuranceValue: string) {
    commit("setInsuranceValue", insuranceValue);
  }
};
