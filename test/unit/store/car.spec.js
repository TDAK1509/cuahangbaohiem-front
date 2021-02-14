import { state, mutations } from "@/store/car";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

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
      expect(_state.carYearThreshold).toBe(
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      mutations.setCarYearThreshold(_state, CarYearThreshold.FROM_3_TO_6_YEARS);
      expect(_state.carYearThreshold).toBe(CarYearThreshold.FROM_3_TO_6_YEARS);
    });

    it("setAddons() updates state.addons", () => {
      expect(_state.addons).toEqual([]);
      mutations.setAddons(_state, [CarInsuranceAddOn.OPTION_1]);
      expect(_state.addons).toEqual([CarInsuranceAddOn.OPTION_1]);
    });

    it("setInsuranceCompany() updates state.insuranceCompany", () => {
      expect(_state.insuranceCompany).toBe("");
      mutations.setInsuranceCompany(_state, "PVI");
      expect(_state.insuranceCompany).toBe("PVI");
    });

    it("setInsuranceValue() updates state.insuranceValue", () => {
      expect(_state.insuranceValue).toBe("");
      mutations.setInsuranceValue(_state, "PVI");
      expect(_state.insuranceValue).toBe("PVI");
    });
  });
});
