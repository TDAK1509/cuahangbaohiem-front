import BaoMinhCarInsurance from "~/utils/car-insurance/bao-minh-car-insurance";
import { CarYearThreshold, CarInsuranceAddOn } from "~/utils/car-insurance/car";

describe("class BaoMinhCarInsurance", () => {
  describe("getCarInsuranceValue()", () => {
    describe("if car year threshold is <= 3 years", () => {
      it("if no addons, returns car value * 1.2", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.2;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setCarValue() is working", () => {
        const carValue = 1000;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        let expectedCarInsuranceValue = carValue * 1.2;
        let carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);

        const newCarValue = 100;
        baoMinhCarInsurance.setCarValue(newCarValue);
        carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expectedCarInsuranceValue = newCarValue * 1.2;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setCarYearThreshold() is working", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        const expectedCarInsuranceValue = carValue * 1.2;
        let carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

        baoMinhCarInsurance.setCarYearThreshold(
          CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
        );
        carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("setAddons() is working", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );

        const expectedCarInsuranceValue = 100 * 1.2;
        let carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

        baoMinhCarInsurance.setAddons([]);
        carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 1, returns car value * 1.21", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.21;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 2, returns car value * 1.22", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.22;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on both 1 & 2, returns car value * 1.23", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1, CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.23;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    describe("if 3 < car year threshold <= 6", () => {
      it("if no addons, returns car value * 1.3", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.3;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 1, returns car value * 1.31", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.31;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 2, returns car value * 1.32", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.32;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on both 1 & 2, returns car value * 1.33", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1, CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.33;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    describe("if 6 < car year threshold <= 10", () => {
      it("if no addons, returns car value * 1.4", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;
        const addons = [];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.4;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 1, returns car value * 1.41", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.41;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on 2, returns car value * 1.42", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.42;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });

      it("if add on both 1 & 2, returns car value * 1.43", () => {
        const carValue = 100;
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;
        const addons = [CarInsuranceAddOn.OPTION_1, CarInsuranceAddOn.OPTION_2];
        const baoMinhCarInsurance = new BaoMinhCarInsurance(
          carValue,
          carYearThreshold,
          addons
        );
        const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
        const expectedCarInsuranceValue = carValue * 1.43;
        expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
      });
    });

    it("if car year threshold > 10, returns 0", () => {
      const carValue = 100;
      const invalidCarYearThreshold = 69;
      const addons = [];
      const baoMinhCarInsurance = new BaoMinhCarInsurance(
        carValue,
        invalidCarYearThreshold,
        addons
      );
      const carInsuranceValue = baoMinhCarInsurance.getCarInsuranceValue();
      expect(carInsuranceValue).toBe(0);
    });
  });
});