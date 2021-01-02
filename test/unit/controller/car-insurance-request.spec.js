import CarInsuranceRequestController from "@/controller/car-insurance-request";
import CarInsuranceRequestModel from "@/models/car-insurance-request";

jest.mock("@/models/car-insurance-request");

describe("CarInsuranceRequestController", () => {
  describe("save()", () => {
    it("calls CarInsuranceRequestMode.save with correct argument", () => {
      const mock = jest.fn();
      CarInsuranceRequestModel.save = mock;
      const controller = new CarInsuranceRequestController();
      controller.save("random request object");
      expect(mock).toBeCalledWith("random request object");
    });
  });
});
