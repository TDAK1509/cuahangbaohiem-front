import { MutationTree } from "vuex";

export const state = () => ({
  carValue: 0
});

export type CarState = ReturnType<typeof state>;

export const mutations: MutationTree<CarState> = {
  setCarValue(state: CarState, payload: number) {
    state.carValue = payload;
  }
};
