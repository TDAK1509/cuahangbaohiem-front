import CarInsuranceRequestController, {
  CarYearThreshold,
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";
import CarInsuranceRequestModel from "@/models/car-insurance-request";
import MockDate from "mockdate";

jest.mock("@/models/car-insurance-request");

describe("CarInsuranceRequestController", () => {
  describe("save()", () => {
    beforeEach(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    afterEach(() => {
      MockDate.reset();
    });

    it("calls CarInsuranceRequestMode.save with correct argument", () => {
      const mock = jest.fn();
      CarInsuranceRequestModel.save = mock;

      const controller = new CarInsuranceRequestController();
      const requestObject = { test: "test" };
      controller.save(requestObject);

      const expectedObject = {
        ...requestObject,
        dateMsec: new Date().getTime(),
        isDone: false
      };
      expect(mock).toBeCalledTimes(1);
      expect(mock).toBeCalledWith(expectedObject);
    });
  });

  describe("getCarYearThresholdLabel()", () => {
    it("returns 'Dưới 3 năm' threshold is <= 3 years", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getCarYearThresholdLabel(
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      expect(result).toBe("Dưới 3 năm");
    });

    it("returns 'Từ 3 đến 6 năm' threshold is 3 < x <= 6 years", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getCarYearThresholdLabel(
        CarYearThreshold.FROM_3_TO_6_YEARS
      );
      expect(result).toBe("Từ 3 đến 6 năm");
    });

    it("returns 'Từ 6 đến 10 năm' threshold is 6 < x <= 10 years", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getCarYearThresholdLabel(
        CarYearThreshold.OVER_6_YEARS
      );
      expect(result).toBe("Từ 6 đến 10 năm");
    });
  });

  describe("getAddOnLabel()", () => {
    it("returns '' add on is BASIC", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.BASIC);
      expect(result).toBe("");
    });

    it("returns '006' add on is DKBS_006", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006);
      expect(result).toBe("DKBS_006");
    });
  });
});
