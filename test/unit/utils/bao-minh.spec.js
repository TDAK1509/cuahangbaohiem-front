import BaoMinh from "~/utils/insurance-companies/bao-minh";
import { CarYearThreshold } from "@/utils/car";

describe("class BaoMinh", () => {
  describe("getCarInsuranceValue()", () => {
    it("if car year threshold is <= 3 years, returns car value * 1.2", () => {
      const carValue = 100;
      const baoMinh = new BaoMinh();
      const carInsuranceValue = baoMinh.getCarInsuranceValue(
        carValue,
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.2;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("if 3 < car year threshold <= 6, returns car value * 1.3", () => {
      const carValue = 100;
      const baoMinh = new BaoMinh();
      const carInsuranceValue = baoMinh.getCarInsuranceValue(
        carValue,
        CarYearThreshold.FROM_3_TO_6_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.3;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("if 6 < car year threshold <= 10, returns car value * 1.4", () => {
      const carValue = 100;
      const baoMinh = new BaoMinh();
      const carInsuranceValue = baoMinh.getCarInsuranceValue(
        carValue,
        CarYearThreshold.OVER_6_YEARS
      );
      const expectedCarInsuranceValue = carValue * 1.4;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("if car year threshold > 10, returns 0", () => {
      const carValue = 100;
      const invalidCarYearThreshold = 69;
      const baoMinh = new BaoMinh();
      const carInsuranceValue = baoMinh.getCarInsuranceValue(
        carValue,
        invalidCarYearThreshold
      );
      expect(carInsuranceValue).toBe(0);
    });
  });
});
