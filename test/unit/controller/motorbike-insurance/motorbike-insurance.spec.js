import MotorbikeInsuranceRequestController, {
  MotorbikeType,
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
    it("returns 'Xe Mô tô 2 bánh dung tích từ 50cc trở xuống' when arg is UP_TO_50_CC", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getMotorbikeTypeLabel(
        MotorbikeType.UP_TO_50_CC
      );
      expect(result).toBe("Xe Mô tô 2 bánh dung tích từ 50cc trở xuống");
    });

    it("returns 'Xe Mô tô 2 bánh dung tích trên 50cc' when arg is UP_TO_50_CC", () => {
      const controller = new MotorbikeInsuranceRequestController();
      const result = controller.getMotorbikeTypeLabel(
        MotorbikeType.ABOVE_50_CC
      );
      expect(result).toBe("Xe Mô tô 2 bánh dung tích trên 50cc");
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
});
