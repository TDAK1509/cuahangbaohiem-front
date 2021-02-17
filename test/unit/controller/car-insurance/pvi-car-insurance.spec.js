import PviCarInsurance from "~/controller/car-insurance/pvi-car-insurance";
import {
  CarYearThreshold,
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";

describe("class PviCarInsurance", () => {
  describe.skip("setters", () => {
    it("setCarValue() is working", () => {
      const carValue = 100;
      const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
      const addon = "";
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        carYearThreshold,
        addon
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
      const addon = "";
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        carYearThreshold,
        addon
      );

      const carInsuranceValue1 = pviCarInsurance.getCarInsuranceValue();
      pviCarInsurance.setCarYearThreshold(
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      const carInsuranceValue2 = pviCarInsurance.getCarInsuranceValue();

      expect(carInsuranceValue1).not.toBe(carInsuranceValue2);
    });

    it("setAddon() is working", () => {
      const carValue = 100;
      const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;
      const addon = [CarInsuranceAddOn.DKBS_006_007];
      const pviCarInsurance = new PviCarInsurance(
        carValue,
        carYearThreshold,
        addon
      );

      const carInsuranceValue1 = pviCarInsurance.getCarInsuranceValue();
      pviCarInsurance.setAddon(CarInsuranceAddOn.DKBS_006);
      const carInsuranceValue2 = pviCarInsurance.getCarInsuranceValue();

      expect(carInsuranceValue1).not.toBe(carInsuranceValue2);
    });
  });

  describe("getCarInsuranceValue()", () => {
    describe("carValue <= 500", () => {
      const carValue = 100;

      describe("if car year threshold is <= 3 years", () => {
        const carYearThreshold = CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS;

        it("if no addon, returns car value * 1.5", () => {
          const addon = "";
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.5;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.5", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.5;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.6", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.6;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.6", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.6;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.7", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.7;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.8", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.8;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.9", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.9;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe.skip("if 3 < car year threshold <= 6", () => {
        const carYearThreshold = CarYearThreshold.FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.3", () => {
          const addon = "";
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.3;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 1, returns car value * 1.31", () => {
          const addon = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.31;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 2, returns car value * 1.32", () => {
          const addon = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.32;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both 1 & 2, returns car value * 1.33", () => {
          const addon = [
            CarInsuranceAddOn.DKBS_006,
            CarInsuranceAddOn.DKBS_007
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.33;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe.skip("if 6 < car year threshold <= 10", () => {
        const carYearThreshold = CarYearThreshold.OVER_6_YEARS;

        it("if no addon, returns car value * 1.4", () => {
          const addon = "";
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.4;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 1, returns car value * 1.41", () => {
          const addon = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.41;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on 2, returns car value * 1.42", () => {
          const addon = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.42;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both 1 & 2, returns car value * 1.43", () => {
          const addon = [
            CarInsuranceAddOn.DKBS_006,
            CarInsuranceAddOn.DKBS_007
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYearThreshold,
            addon
          );
          const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
          const expectedCarInsuranceValue = carValue * 1.43;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      it("if car year threshold > 10, returns 0", () => {
        const invalidCarYearThreshold = 69;
        const addon = "";
        const pviCarInsurance = new PviCarInsurance(
          carValue,
          invalidCarYearThreshold,
          addon
        );
        const carInsuranceValue = pviCarInsurance.getCarInsuranceValue();
        expect(carInsuranceValue).toBe(0);
      });
    });
  });
});
