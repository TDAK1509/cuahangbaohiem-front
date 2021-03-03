import CarInsuranceRequestController, {
  CarInsuranceAddOn
} from "~/controller/car-insurance/car-insurance-request";
import CarInsuranceRequestModel from "@/models/car-insurance-request";
import MockDate from "mockdate";

jest.mock("@/models/car-insurance-request");

describe("CarInsuranceRequestController", () => {
  describe("save()", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
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

  describe("getAddOnCheckboxes()", () => {
    it("returns empty array if yearGap is null", () => {
      const controller = new CarInsuranceRequestController();
      const addonCheckboxes = controller.getAddOnCheckboxes();
      const expected = [
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_003),
          value: CarInsuranceAddOn.DKBS_003
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
          value: CarInsuranceAddOn.DKBS_006
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_007),
          value: CarInsuranceAddOn.DKBS_007
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_008),
          value: CarInsuranceAddOn.DKBS_008
        }
      ];
      expect(addonCheckboxes).toEqual(expected);
    });
  });
});
