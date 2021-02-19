import BaoMinhCarInsurance from "~/controller/car-insurance/bao-minh-car-insurance";
import { CarInsuranceAddOn } from "~/controller/car-insurance/car-insurance-request";
import MockDate from "mockdate";

const THIS_YEAR = 2020;
const LESS_THAN_3_YEARS = THIS_YEAR - 2;
const FROM_3_TO_6_YEARS = THIS_YEAR - 4;
const FROM_6_TO_10_YEARS = THIS_YEAR - 7;
const FROM_10_TO_15_YEARS = THIS_YEAR - 11;
const FROM_15_TO_20_YEARS = THIS_YEAR - 16;
const OVER_20_YEARS = THIS_YEAR - 21;

describe("class BaoMinhCarInsurance", () => {
  beforeAll(() => {
    MockDate.set(new Date(THIS_YEAR, 1, 1));
  });

  describe("setters", () => {
    it("setCarValue() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const addon = CarInsuranceAddOn.BASIC;
      const baoMinhCarInsurance = new BaoMinhCarInsurance(
        carValue,
        carYear,
        addon
      );

      let expectedCarInsuranceValue = carValue * 1.5;
      let carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);

      const newCarValue = 500;
      baoMinhCarInsurance.setCarValue(newCarValue);
      carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
      expectedCarInsuranceValue = newCarValue * 1.5;
      expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
    });

    it("setCarYear() is working", () => {
      const carValue = 100;
      const carYear = FROM_3_TO_6_YEARS;
      const addon = CarInsuranceAddOn.BASIC;
      const baoMinhCarInsurance = new BaoMinhCarInsurance(
        carValue,
        carYear,
        addon
      );

      const carInsuranceValue1 = baoMinhCarInsurance.getInsuranceFee();
      baoMinhCarInsurance.setCarYear(LESS_THAN_3_YEARS);
      const carInsuranceValue2 = baoMinhCarInsurance.getInsuranceFee();

      expect(carInsuranceValue1).not.toBe(0);
      expect(carInsuranceValue2).not.toBe(0);
      expect(carInsuranceValue1).not.toBe(carInsuranceValue2);
    });

    it("setAddon() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const addon = CarInsuranceAddOn.DKBS_006_007;
      const baoMinhCarInsurance = new BaoMinhCarInsurance(
        carValue,
        carYear,
        addon
      );

      const carInsuranceValue1 = baoMinhCarInsurance.getInsuranceFee();
      baoMinhCarInsurance.setAddon(CarInsuranceAddOn.DKBS_006);
      const carInsuranceValue2 = baoMinhCarInsurance.getInsuranceFee();

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

        it("if no addon, returns car value * 1.5", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.5;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.5", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.5;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.6", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.6;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.6", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.6;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.7", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.7;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.8", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.8;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.9", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.9;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.65", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.65;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.75", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.75;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.95", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.95;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.85", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.85;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 2.05", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.05;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 2.15", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.15;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 2.25", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.25;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, returns car value * 1.8", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.8;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.95", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.95;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 2.25", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.25;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 2.05", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.05;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 2.35", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.35;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 10 < car year threshold <= 15", () => {
        const carYear = FROM_10_TO_15_YEARS;

        it("if no addon, returns car value * 1.95", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.95;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 2.15", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.15;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 15 < car year threshold <= 20", () => {
        const carYear = FROM_15_TO_20_YEARS;

        it("if no addon, returns car value * 2.1", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.1;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if car year threshold > 20", () => {
        const carYear = OVER_20_YEARS;

        it("if no addon, returns car value * 2.25", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2.25;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });

    describe("500 < carValue < 700", () => {
      const carValue = 600;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, returns car value * 1.28", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.28;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.28", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.28;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.36", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.36;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.36", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.36;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.45", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.45;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.53", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.53;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.62", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.62;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.4", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.4;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.49", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.49;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.66", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.66;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.57", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.57;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.74", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.74;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.83", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.83;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.91", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.91;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, returns car value * 1.53", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.53;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.66", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.66;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.91", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.91;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.74", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.74;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 2", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 2;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 10 < car year threshold <= 15", () => {
        const carYear = FROM_10_TO_15_YEARS;

        it("if no addon, returns car value * 1.66", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.66;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.83", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.83;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 15 < car year threshold <= 20", () => {
        const carYear = FROM_15_TO_20_YEARS;

        it("if no addon, returns car value * 1.79", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.79;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if car year threshold > 20", () => {
        const carYear = OVER_20_YEARS;

        it("if no addon, returns car value * 1.91", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.91;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });

    describe("carValue >= 700", () => {
      const carValue = 800;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, returns car value * 1.13", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.13;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.13", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.13;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.2", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.2;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.2", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.2;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.28", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.28;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.35", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.35;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.43", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.43;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, returns car value * 1.24", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.24;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.31", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.31;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.46", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.46;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.39", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.39;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.54", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.54;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 1.61", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.61;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.69", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.69;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, returns car value * 1.35", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.35;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.46", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.46;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 1.69", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.69;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 1.54", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.54;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 1.76", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.76;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 10 < car year threshold <= 15", () => {
        const carYear = FROM_10_TO_15_YEARS;

        it("if no addon, returns car value * 1.46", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.46;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 1.61", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.61;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 15 < car year threshold <= 20", () => {
        const carYear = FROM_15_TO_20_YEARS;

        it("if no addon, returns car value * 1.58", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.58;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if car year threshold > 20", () => {
        const carYear = OVER_20_YEARS;

        it("if no addon, returns car value * 1.69", () => {
          const addon = CarInsuranceAddOn.BASIC;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 1.69;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_007, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006 & DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, DKBS_007 and DKBS_003, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, DKBS_006, DKBS_007 and DKBS_008, returns car value * 0", () => {
          const addon = CarInsuranceAddOn.DKBS_003_006_007_008;
          const baoMinhCarInsurance = new BaoMinhCarInsurance(
            carValue,
            carYear,
            addon
          );
          const carInsuranceValue = baoMinhCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = carValue * 0;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });
  });
});
