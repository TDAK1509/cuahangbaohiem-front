import MotorbikeInsuranceRequestController, {
  MotorbikeType,
  MotorbikeAddOn,
  Promotion
} from "@/controller/motorbike-insurance/motorbike-insurance";
import MotorbikeInsuranceRequestModel from "@/models/motorbike-insurance-request";
import MockDate from "mockdate";

describe("controller/motorbike-insurance", () => {
  describe("save()", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    it("calls MotorbikeInsuranceRequestMode.save with correct argument", () => {
      const mock = jest.fn();
      MotorbikeInsuranceRequestModel.save = mock;

      const controller = new MotorbikeInsuranceRequestController();
      const requestObject = { test: "test" };
      controller.save(requestObject);

      const expectedObject = {
        ...requestObject,
        createdAt: new Date().getTime()
      };
      expect(mock).toBeCalledTimes(1);
      expect(mock).toBeCalledWith(expectedObject);
    });
  });

  describe("getMotorbikeTypeLabel()", () => {
    it("returns 'Dưới 50cc' when arg is UP_TO_50_CC", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getMotorbikeTypeLabel(
        MotorbikeType.UP_TO_50_CC
      );
      expect(result).toBe("Dưới 50cc");
    });

    it("returns 'Trên 50cc' when arg is UP_TO_50_CC", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getMotorbikeTypeLabel(
        MotorbikeType.ABOVE_50_CC
      );
      expect(result).toBe("Trên 50cc");
    });
  });

  describe("getPromotionLabel()", () => {
    it("returns 'Mua 1 năm tặng 1 năm' when arg is BUY_1_YEAR_ADD_1_YEAR", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getPromotionLabel(
        Promotion.BUY_1_YEAR_ADD_1_YEAR
      );
      expect(result).toBe("Mua 1 năm tặng 1 năm");
    });

    it("returns 'Mua 1 xe tặng 1 xe' when arg is BUY_1_BIKE_ADD_1_BIKE", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getPromotionLabel(
        Promotion.BUY_1_BIKE_ADD_1_BIKE
      );
      expect(result).toBe("Mua 1 xe tặng 1 xe");
    });
  });

  describe("getAddOnLabel()", () => {
    it("returns '10 triệu đồng/ người/ vụ' when arg is TEN", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getAddOnLabel(MotorbikeAddOn.TEN);
      expect(result).toBe("10 triệu đồng/ người/ vụ");
    });

    it("returns '20 triệu đồng/ người/ vụ' when arg is TEN", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getAddOnLabel(MotorbikeAddOn.TWENTY);
      expect(result).toBe("20 triệu đồng/ người/ vụ");
    });

    it("returns '30 triệu đồng/ người/ vụ' when arg is TEN", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getAddOnLabel(MotorbikeAddOn.THIRTY);
      expect(result).toBe("30 triệu đồng/ người/ vụ");
    });
  });

  describe("Calculate insurance fee", () => {
    describe("Motorbike <= 50cc", () => {
      const motorbike = MotorbikeType.UP_TO_50_CC;

      it("given 1 year, returns 60500", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(1);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(60500);
      });

      it("given 2 year, returns 121000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(2);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(121000);
      });

      it("given 3 year, returns 181500", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(3);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(181500);
      });
    });

    describe("Motorbike > 50cc", () => {
      const motorbike = MotorbikeType.ABOVE_50_CC;

      it("given 1 year, returns 66000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(1);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(66000);
      });

      it("given 2 year, returns 132000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(2);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(132000);
      });

      it("given 3 year, returns 198000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(3);
        controller.setMotorbike(motorbike);
        const insuranceFee = controller.getInsuranceFee();
        expect(insuranceFee).toBe(198000);
      });
    });
  });

  describe("Calculate addon fee", () => {
    describe("Addon TEN", () => {
      const addon = MotorbikeAddOn.TEN;

      it("give add on TEN, year 1, returns 20000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(1);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(20000);
      });

      it("give add on TEN, year 3, returns 60000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(3);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(60000);
      });
    });

    describe("Addon TWENTY", () => {
      const addon = MotorbikeAddOn.TWENTY;

      it("give add on TWENTY, year 1, returns 40000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(1);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(40000);
      });

      it("give add on TWENTY, year 2, returns 80000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(2);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(80000);
      });
    });

    describe("Addon THIRTY", () => {
      const addon = MotorbikeAddOn.THIRTY;

      it("give add on THIRTY, year 1, returns 60000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(1);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(60000);
      });

      it("give add on THIRTY, year 3, returns 180000", () => {
        const controller = new MotorbikeInsuranceRequestController();
        controller.setYear(3);
        controller.setAddon(addon);
        const addOnFee = controller.getAddOnFee();
        expect(addOnFee).toBe(180000);
      });
    });
  });
});
