import PviCarInsurance from "~/controller/car-insurance/pvi-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";

describe("class PviCarInsurance", () => {
  describe("setters", () => {
    it("setCarValue() is working", () => {
      const carValue = 100;
      const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
      const addons = [];
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        carYearThreshold,
        addons
      );

      let expectedCarInsuranceValue = carValue * 1.5;
      let carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);

      const newCarValue = 500;
      pviCarInsurance.setCarValue(newCarValue);
      carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
      expectedCarInsuranceValue = newCarValue * 1.5;
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

      const expectedCarInsuranceValue = carValue * 1.5;
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
      const addons = [CarInsuranceAddOn.DKBS_006];
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        carYearThreshold,
        addons
      );

      const expectedCarInsuranceValue = 100 * 1.5;
      let carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
      expect(carInsuranceValue).not.toBe(expectedCarInsuranceValue);

      pviCarInsurance.setAddons([]);
      carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });
  });

  describe("getCarInsuranceValue()", () => {
    describe("carValue <= 500", () => {
      const carValue = 100;

      describe("if car year threshold is <= 3 years", () => {
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;

        it("if no addons, returns car value * 1.5", () => {
          const addons = [];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.5;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 1, returns car value * 1.21", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.21;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 2, returns car value * 1.22", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.22;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both 1 & 2, returns car value * 1.23", () => {
          const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
          const addons = [
            CarInsuranceAddOn.DKBS_006,
            CarInsuranceAddOn.DKBS_007
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.23;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;

        it("if no addons, returns car value * 1.3", () => {
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

        it("if add on 1, returns car value * 1.31", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.31;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 2, returns car value * 1.32", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.32;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both 1 & 2, returns car value * 1.33", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_006,
            CarInsuranceAddOn.DKBS_007
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.33;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;

        it("if no addons, returns car value * 1.4", () => {
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

        it("if add on 1, returns car value * 1.41", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.41;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 2, returns car value * 1.42", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.42;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both 1 & 2, returns car value * 1.43", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_006,
            CarInsuranceAddOn.DKBS_007
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.43;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      it("if car year threshold > 10, returns 0", () => {
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
});
