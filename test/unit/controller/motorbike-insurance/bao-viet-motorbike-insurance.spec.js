import BaoVietMotorbikeInsurance from "~/controller/motorbike-insurance/bao-viet-motorbike-insurance";
import { MotorbikeType } from "@/controller/motorbike-insurance/motorbike-insurance";

describe("BaoVietMotorbikeInsurance class", () => {
  describe("Motorbike <= 50cc", () => {
    const motorbike = MotorbikeType.UP_TO_50_CC;

    describe("without addon", () => {
      it("given 1 year, returns 60500", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(1);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(60500);
      });

      it("given 2 year, returns 121000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(2);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(121000);
      });

      it("given 3 year, returns 181500", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(3);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(181500);
      });
    });

    describe("with addon", () => {
      it("given 1 year, returns 80500", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(1);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(80500);
      });

      it("given 2 year, returns 161000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(2);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(161000);
      });

      it("given 3 year, returns 241500", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(3);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(241500);
      });
    });
  });

  describe("Motorbike > 50cc", () => {
    const motorbike = MotorbikeType.ABOVE_50_CC;

    describe("without addon", () => {
      it("given 1 year, returns 66000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(1);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(66000);
      });

      it("given 2 year, returns 132000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(2);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(132000);
      });

      it("given 3 year, returns 198000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(3);
        baoViet.setMotorbike(motorbike);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(198000);
      });
    });

    describe("with addon", () => {
      it("given 1 year, returns 86000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(1);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(86000);
      });

      it("given 2 year, returns 172000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(2);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(172000);
      });

      it("given 3 year, returns 258000", () => {
        const baoViet = new BaoVietMotorbikeInsurance();
        baoViet.setYear(3);
        baoViet.setMotorbike(motorbike);
        baoViet.setHasAddon(true);
        const insuranceFee = baoViet.getInsuranceFee();
        expect(insuranceFee).toBe(258000);
      });
    });
  });
});
