import { MutationTree, ActionTree, GetterTree } from "vuex";
import { RootState } from "@/store";
import CarInsuranceRequestController, {
  CarInsuranceAddOn,
  CarInsuranceRequest
} from "~/controller/car-insurance/car-insurance-request";

const controller = new CarInsuranceRequestController();

export const state = () => ({
  carValue: 0,
  carYear: 0,
  addon: CarInsuranceAddOn.NONE,
  insuranceCompany: "",
  insuranceFee: 0,
  name: "",
  email: "",
  phone: "",
  note: ""
});

export type CarState = ReturnType<typeof state>;

export const getters: GetterTree<CarState, RootState> = {
  insuranceRequest(state): CarInsuranceRequest {
    const addon = controller.getAddOnLabel(state.addon);

    return {
      carValue: toMillion(state.carValue),
      carYear: state.carYear,
      addon,
      insuranceCompany: state.insuranceCompany,
      insuranceFee: toMillion(state.insuranceFee),
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

  setCarYear(state: CarState, payload: number) {
    state.carYear = payload;
  },

  setAddon(state: CarState, payload: CarInsuranceAddOn) {
    state.addon = payload;
  },

  setInsuranceCompany(state: CarState, payload: string) {
    state.insuranceCompany = payload;
  },

  setInsuranceFee(state: CarState, payload: number) {
    state.insuranceFee = payload;
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

  setCarYear({ commit }, carYear: number) {
    commit("setCarYear", carYear);
  },

  setAddon({ commit }, addon: CarInsuranceAddOn[]) {
    commit("setAddon", addon);
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

  setInsuranceFee({ commit }, insuranceFee: string) {
    commit("setInsuranceFee", insuranceFee);
  }
};

function toMillion(n: number): number {
  return n * 1000000;
}
