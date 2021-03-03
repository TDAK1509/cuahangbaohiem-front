import PviCarInsurance from "~/controller/car-insurance/pvi-car-insurance";
import { CarInsuranceAddOn } from "~/controller/car-insurance/car-insurance-request";
import MockDate from "mockdate";

const THIS_YEAR = 2020;
const LESS_THAN_3_YEARS = THIS_YEAR - 2;
const FROM_3_TO_6_YEARS = THIS_YEAR - 4;
const FROM_6_TO_10_YEARS = THIS_YEAR - 7;

describe("class PviCarInsurance", () => {
  beforeAll(() => {
    MockDate.set(new Date(THIS_YEAR, 1, 1));
  });

  describe.skip("setters", () => {
    it("setCarValue() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const pviCarInsurance = new PviCarInsurance(carValue, carYear);

      let expectedCarInsuranceValue = (carValue * 1.5) / 100;
      let carInsuranceValue = pviCarInsurance.getInsuranceFee();
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);

      const newCarValue = 500;
      pviCarInsurance.setCarValue(newCarValue);
      carInsuranceValue = pviCarInsurance.getInsuranceFee();
      expectedCarInsuranceValue = (newCarValue * 1.5) / 100;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("setCarYear() is working", () => {
      const carValue = 100;
      const carYear = FROM_3_TO_6_YEARS;
      const pviCarInsurance = new PviCarInsurance(carValue, carYear);

      const carInsuranceValue1 = pviCarInsurance.getInsuranceFee();
      pviCarInsurance.setCarYear(LESS_THAN_3_YEARS);
      const carInsuranceValue2 = pviCarInsurance.getInsuranceFee();

      expect(carInsuranceValue1).not.toBe(0);
      expect(carInsuranceValue2).not.toBe(0);
      expect(carInsuranceValue1).not.toBe(carInsuranceValue2);
    });

    it("setAddons() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const pviCarInsurance = new PviCarInsurance(carValue, carYear);

      const carInsuranceValue1 = pviCarInsurance.getInsuranceFee();
      pviCarInsurance.setAddons([CarInsuranceAddOn.DKBS_003]);
      const carInsuranceValue2 = pviCarInsurance.getInsuranceFee();

      expect(carInsuranceValue1).not.toBe(0);
      expect(carInsuranceValue2).not.toBe(0);
      expect(carInsuranceValue1).not.toBe(carInsuranceValue2);
    });
  });

  describe("getInsuranceFee()", () => {
    describe("carValue <= 500", () => {
      const carValue = 100;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, insurance fee is 1.5%", () => {
          const pviCarInsurance = new PviCarInsurance(carValue, carYear);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.5) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        // it("if add on DKBS_003, insurance fee is 1.5 + 0", () => {
        //   const addons = [CarInsuranceAddOn.DKBS_003];
        //   const pviCarInsurance = new PviCarInsurance(carValue, carYear, addons);
        //   const carInsuranceValue = pviCarInsurance.getInsuranceFee();
        //   const expectedCarInsuranceValue = (carValue * 1.5) / 100;
        //   expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        // });

        // it("if add on DKBS_006, insurance fee is 1.5 + 0", () => {
        //   const addons = [CarInsuranceAddOn.DKBS_006];
        //   const pviCarInsurance = new PviCarInsurance(carValue, carYear, addons);
        //   const carInsuranceValue = pviCarInsurance.getInsuranceFee();
        //   const expectedCarInsuranceValue = (carValue * 1.5) / 100;
        //   expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        // });
      });
    });

    describe.skip("500 < carValue < 700", () => {
      const carValue = 600;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, returns car value * 1.28%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.28) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.28%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.28) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.36%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.36) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.36%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.36) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.45%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.45) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.53%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.53) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.62%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.62) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.4%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.4) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.49%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.49) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.66%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.66) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.57%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.57) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.74%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.74) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.83%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.83) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.91%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.91) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, returns car value * 1.53%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.53) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.66%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.66) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.91%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.91) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.74%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.74) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 2%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 2) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });

    describe.skip("carValue >= 700", () => {
      const carValue = 800;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, returns car value * 1.13%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.13) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.13%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.13) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.2%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.2) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.2%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.2) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.28%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.28) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.35%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.35) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.43%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.43) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.24%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.24) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.31%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.31) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.46%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.46) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.39%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.39) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.54%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.54) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.61%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.61) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.69%", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.69) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, returns car value * 1.35%", () => {
          const addon = CarInsuranceAddOn.NONE;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.35) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.46%", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.46) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.69%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.69) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.54%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.54) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.76%", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.76) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const pviCarInsurance = new PviCarInsurance(carValue, carYear, addon);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });
  });
});
