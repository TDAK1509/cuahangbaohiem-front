import { MutationTree } from "vuex";

export const state = () => ({
  carValue: 0,
  carYearThreshold: 0
});

export type CarState = ReturnType<typeof state>;

export const mutations: MutationTree<CarState> = {
  setCarValue(state: CarState, payload: number) {
    state.carValue = payload;
  },

  setCarYearThreshold(state: CarState, payload: number) {
    state.carYearThreshold = payload;
  }
};
