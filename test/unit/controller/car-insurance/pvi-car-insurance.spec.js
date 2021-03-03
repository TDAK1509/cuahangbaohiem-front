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

        it("if add on DKBS_003, insurance fee is 1.5 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_003];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.2)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, insurance fee is 1.5 + 0", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.5) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_007, insurance fee is 1.5 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.1)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_008, insurance fee is 1.5 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_008];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.1)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both DKBS_003 & DKBS_008, insurance fee is 1.5 + 0.2 + 0.1", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_003,
            CarInsuranceAddOn.DKBS_008
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.3)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6 years", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, insurance fee is 1.65%", () => {
          const pviCarInsurance = new PviCarInsurance(carValue, carYear);
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.65) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, insurance fee is 1.65 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_003];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.2)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, insurance fee is 1.65 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.1)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_007, insurance fee is 1.65 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.2)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_008, insurance fee is 1.65 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_008];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.1)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });

        it("if add on both DKBS_003 & DKBS_008, insurance fee is 1.65 + 0.2 + 0.1", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_003,
            CarInsuranceAddOn.DKBS_008
          ];
          const pviCarInsurance = new PviCarInsurance(
            carValue,
            carYear,
            addons
          );
          const carInsuranceValue = pviCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.3)) / 100;
          expect(carInsuranceValue).toBe(expectedCarInsuranceValue);
        });
      });
    });
  });
});
