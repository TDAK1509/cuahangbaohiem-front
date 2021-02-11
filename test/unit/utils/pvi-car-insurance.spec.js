import Pvi from "~/utils/pvi";
import { CarYearThreshold } from "@/utils/car";

describe("class Pvi", () => {
  describe("getCarInsuranceValue()", () => {
    it("if car year threshold is <= 3 years, returns car value * 1.2", () => {
      const carValue = 100;
      const pvi = new Pvi();
      const carInsuranceValue = pvi.getCarInsuranceValue(
        carValue,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.2;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("if 3 < car year threshold <= 6, returns car value * 1.3", () => {
      const carValue = 100;
      const pvi = new Pvi();
      const carInsuranceValue = pvi.getCarInsuranceValue(
        carValue,
        CarYearThreshold.FROM_3_TO_6_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.3;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });
  });
});