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
    });
  });
});
