import PviMotorbikeInsurance, {
  Motorbike
} from "~/controller/motorbike-insurance/pvi-motorbike-insurance";

describe("PviMotorbikeInsurance class", () => {
  describe("Motorbike <= 50cc", () => {
    const motorbike = Motorbike.UP_TO_50_CC;

    describe("without addon", () => {
      it("given 1 year, returns 60500", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(1);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(60500);
      });

      it("given 2 year, returns 121000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(2);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(121000);
      });

      it("given 3 year, returns 181500", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(3);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(181500);
      });
    });

    describe("with addon", () => {
      it("given 1 year, returns 80500", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(1);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(80500);
      });

      it("given 2 year, returns 161000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(2);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(161000);
      });

      it("given 3 year, returns 241500", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(3);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(241500);
      });
    });
  });

  describe("Motorbike > 50cc", () => {
    const motorbike = Motorbike.ABOVE_50CC;

    describe("without addon", () => {
      it("given 1 year, returns 66000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(1);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(66000);
      });

      it("given 2 year, returns 132000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(2);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(132000);
      });

      it("given 3 year, returns 198000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(3);
        pvi.setMotorbike(motorbike);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(198000);
      });
    });

    describe("with addon", () => {
      it("given 1 year, returns 86000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(1);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(86000);
      });

      it("given 2 year, returns 172000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(2);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(172000);
      });

      it("given 3 year, returns 258000", () => {
        const pvi = new PviMotorbikeInsurance();
        pvi.setYear(3);
        pvi.setMotorbike(motorbike);
        pvi.setHasAddon(true);
        const insuranceFee = pvi.getInsuranceFee();
        expect(insuranceFee).toBe(258000);
      });
    });
  });
});
