import { state, mutations } from "@/store/car";

describe("store/car", () => {
  describe("mutations", () => {
    let _state;

    beforeEach(() => {
      _state = state();
    });

    it("setCarValue() updates state.carValue", () => {
      expect(_state.carValue).toBe(0);
      mutations.setCarValue(_state, 1);
      expect(_state.carValue).toBe(1);
    });

    it("setCarYearThreshold() updates state.carYearThreshold", () => {
      expect(_state.carYearThreshold).toBe(0);
      mutations.setCarYearThreshold(_state, 1);
      expect(_state.carYearThreshold).toBe(1);
    });
  });
});
