import PviCarInsurance from "~/utils/insurance-companies/pvi-car-insurance";
import { CarYearThreshold, CarInsuranceAddOn } from "@/utils/car";

describe("class Pvi", () => {
  describe("getCarInsuranceValue()", () => {
    describe("if car year threshold is <= 3 years", () => {
      it("if no addons, returns car value * 1.2", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.2;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setCarValue() is working", () => {
        const carValue = 1000;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        const expectedCarInsuranceValue = 100 * 1.2;
        let carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

        pviCarInsurance.setCarValue(100);
        carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setCarYearThreshold() is working", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        const expectedCarInsuranceValue = 100 * 1.2;
        let carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

        pviCarInsurance.setCarYearThreshold(
          CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
        );
        carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setAddons() is working", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        const expectedCarInsuranceValue = 100 * 1.2;
        let carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

        pviCarInsurance.setAddons([]);
        carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 1, returns car value * 1.21", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.21;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    describe("if 3 < car year threshold <= 6", () => {
      it("if no addons, returns car value * 1.3", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.3;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    describe("if 6 < car year threshold <= 10", () => {
      it("if no addons, returns car value * 1.4", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;
        const addons = [];
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.4;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    it("if car year threshold > 10, returns 0", () => {
      const carValue = 100;
      const invalidCarYearThreshold = 69;
      const addons = [];
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        invalidCarYearThreshold,
        addons
      );
      const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
      expect(carInsuranceValue).toBe(0);
    });
  });
});
