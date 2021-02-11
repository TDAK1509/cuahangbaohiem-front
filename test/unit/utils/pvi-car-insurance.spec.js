import Pvi from "~/utils/pvi";
import { CarYearThreshold } from "@/utils/car";

describe("class Pvi", () => {
  describe("getCarInsuranceValue()", () => {
    it("if car year is <= 3 years, returns car value * 1.2", () => {
      const carValue = 100;
      const pvi = new Pvi();
      const carInsuranceValue = pvi.getCarInsuranceValue(
        carValue,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.2;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });
  });
});
