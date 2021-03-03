import BaoVietCarInsurance from "~/controller/car-insurance/bao-viet-car-insurance";
import { CarInsuranceAddOn } from "~/controller/car-insurance/car-insurance-request";
import MockDate from "mockdate";

const THIS_YEAR = 2020;
const LESS_THAN_3_YEARS = THIS_YEAR - 2;
const FROM_3_TO_6_YEARS = THIS_YEAR - 4;
const FROM_6_TO_10_YEARS = THIS_YEAR - 7;

describe("class BaoVietCarInsurance", () => {
  beforeAll(() => {
    MockDate.set(new Date(THIS_YEAR, 1, 1));
  });

  describe("setters", () => {
    it("setCarValue() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const baoVietCarInsurance = new BaoVietCarInsurance(carValue, carYear);

      let expectedInsuranceFee = (carValue * 1.5) / 100;
      let insuranceFee = baoVietCarInsurance.getInsuranceFee();
      expect(insuranceFee).toBe(expectedInsuranceFee);

      const newCarValue = 500;
      baoVietCarInsurance.setCarValue(newCarValue);
      insuranceFee = baoVietCarInsurance.getInsuranceFee();
      expectedInsuranceFee = (newCarValue * 1.5) / 100;
      expect(insuranceFee).toBe(expectedInsuranceFee);
    });

    it("setCarYear() is working", () => {
      const carValue = 100;
      const carYear = FROM_3_TO_6_YEARS;
      const baoVietCarInsurance = new BaoVietCarInsurance(carValue, carYear);

      const insuranceFee1 = baoVietCarInsurance.getInsuranceFee();
      baoVietCarInsurance.setCarYear(LESS_THAN_3_YEARS);
      const insuranceFee2 = baoVietCarInsurance.getInsuranceFee();

      expect(insuranceFee1).not.toBe(0);
      expect(insuranceFee2).not.toBe(0);
      expect(insuranceFee1).not.toBe(insuranceFee2);
    });

    it("setAddons() is working", () => {
      const carValue = 100;
      const carYear = LESS_THAN_3_YEARS;
      const baoVietCarInsurance = new BaoVietCarInsurance(carValue, carYear);

      const insuranceFee1 = baoVietCarInsurance.getInsuranceFee();
      baoVietCarInsurance.setAddons([CarInsuranceAddOn.DKBS_003]);
      const insuranceFee2 = baoVietCarInsurance.getInsuranceFee();

      expect(insuranceFee1).not.toBe(0);
      expect(insuranceFee2).not.toBe(0);
      expect(insuranceFee1).not.toBe(insuranceFee2);
    });
  });

  describe("getInsuranceFee()", () => {
    describe("carValue <= 500", () => {
      const carValue = 100;

      describe("if car year threshold is <= 3 years", () => {
        const carYear = LESS_THAN_3_YEARS;

        it("if no addon, insurance fee is 1.5%", () => {
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.5) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, insurance fee is 1.5 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_003];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.2)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, insurance fee is 1.5 + 0", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.5) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_007, insurance fee is 1.5 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.1)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_008, insurance fee is 1.5 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_008];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.1)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on both DKBS_003 & DKBS_008, insurance fee is 1.5 + 0.2 + 0.1", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_003,
            CarInsuranceAddOn.DKBS_008
          ];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.5 + 0.3)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 3 < car year threshold <= 6 years", () => {
        const carYear = FROM_3_TO_6_YEARS;

        it("if no addon, insurance fee is 1.65%", () => {
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.65) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, insurance fee is 1.65 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_003];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.2)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, insurance fee is 1.65 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.1)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_007, insurance fee is 1.65 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.2)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_008, insurance fee is 1.65 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_008];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.1)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on both DKBS_003 & DKBS_008, insurance fee is 1.65 + 0.2 + 0.1", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_003,
            CarInsuranceAddOn.DKBS_008
          ];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.65 + 0.3)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });
      });

      describe("if 6 < car year threshold <= 10 years", () => {
        const carYear = FROM_6_TO_10_YEARS;

        it("if no addon, insurance fee is 1.8%", () => {
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * 1.8) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_003, insurance fee is 1.8 + 0.2", () => {
          const addons = [CarInsuranceAddOn.DKBS_003];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.8 + 0.2)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_006, insurance fee is 1.8 + 0.15", () => {
          const addons = [CarInsuranceAddOn.DKBS_006];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.8 + 0.15)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_007, insurance fee is 1.8 + 0.3", () => {
          const addons = [CarInsuranceAddOn.DKBS_007];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.8 + 0.3)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on DKBS_008, insurance fee is 1.8 + 0.1", () => {
          const addons = [CarInsuranceAddOn.DKBS_008];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.8 + 0.1)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });

        it("if add on both DKBS_003 & DKBS_008, insurance fee is 1.8 + 0.2 + 0.1", () => {
          const addons = [
            CarInsuranceAddOn.DKBS_003,
            CarInsuranceAddOn.DKBS_008
          ];
          const baoVietCarInsurance = new BaoVietCarInsurance(
            carValue,
            carYear,
            addons
          );
          const insuranceFee = baoVietCarInsurance.getInsuranceFee();
          const expectedCarInsuranceValue = (carValue * (1.8 + 0.3)) / 100;
          expect(insuranceFee).toBe(expectedCarInsuranceValue);
        });
      });
    });

    describe("500 < carValue < 700", () => {
      it("returns insurance fee with rate same to carValue <= 500 with 15% off", () => {
        const carValue = 600;
        const carYear = LESS_THAN_3_YEARS;
        const addons = [CarInsuranceAddOn.DKBS_003];
        const baoVietCarInsurance = new BaoVietCarInsurance(
          carValue,
          carYear,
          addons
        );

        const insuranceFee = baoVietCarInsurance.getInsuranceFee();
        const expectedInsuranceRate =
          Math.round((1.5 + 0.2) * 0.85 * 100) / 100;
        const expectedInsuranceFee = (carValue * expectedInsuranceRate) / 100;
        expect(insuranceFee).toBe(expectedInsuranceFee);
      });
    });

    describe("carValue >= 700", () => {
      it("returns insurance fee with rate same to carValue <= 500 with 25% off", () => {
        const carValue = 700;
        const carYear = LESS_THAN_3_YEARS;
        const addons = [CarInsuranceAddOn.DKBS_003];
        const baoVietCarInsurance = new BaoVietCarInsurance(
          carValue,
          carYear,
          addons
        );
        const insuranceFee = baoVietCarInsurance.getInsuranceFee();
        const expectedInsuranceRate =
          Math.round((1.5 + 0.2) * 0.75 * 100) / 100;
        const expectedInsuranceFee = (carValue * expectedInsuranceRate) / 100;
        expect(insuranceFee).toBe(expectedInsuranceFee);
      });
    });
  });
});
