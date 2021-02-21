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

  describe("getAddOnRadios()", () => {
    it("returns empty array if yearGap is null", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(null);
      expect(addons).toEqual([]);
    });

    it("returns all options if yearGap <= 3", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(2);
      const expectedAddons = getAllAddOnRadios();
      expect(addons).toEqual(expectedAddons);
    });

    it("returns all options if 3 < yearGap <= 6", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(4);
      const expectedAddons = getAllAddOnRadios();
      expect(addons).toEqual(expectedAddons);
    });

    it("returns all options if 3 < yearGap <= 6", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(4);
      const expectedAddons = getAllAddOnRadios();
      expect(addons).toEqual(expectedAddons);
    });

    it("only returns NONE and DKBS_6 options if 6 < yearGap <= 10", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(7);
      const expectedAddons = [
        {
          text: "Không",
          value: CarInsuranceAddOn.NONE
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
          value: CarInsuranceAddOn.DKBS_006
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007),
          value: CarInsuranceAddOn.DKBS_006_007
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_008),
          value: CarInsuranceAddOn.DKBS_006_008
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007_008),
          value: CarInsuranceAddOn.DKBS_006_007_008
        }
      ];
      expect(addons).toEqual(expectedAddons);
    });

    it("only returns NONE and DKBS_6 options if 10 < yearGap <= 15", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(11);
      const expectedAddons = [
        {
          text: "Không",
          value: CarInsuranceAddOn.NONE
        },
        {
          text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
          value: CarInsuranceAddOn.DKBS_006
        }
      ];
      expect(addons).toEqual(expectedAddons);
    });

    it("returns empty array if yearGap > 15", () => {
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(16);
      expect(addons).toEqual([]);
    });
  });

  describe("getAddOnLabel()", () => {
    it("returns '' add on is NONE", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.NONE);
      expect(result).toBe("");
    });

    it("returns 'DKBS_006' add on is DKBS_006", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006);
      expect(result).toBe("DKBS_006");
    });

    it("returns 'DKBS_006_007' add on is DKBS_006_007", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007);
      expect(result).toBe("DKBS_006_007");
    });

    it("returns 'DKBS_006_008' add on is DKBS_006_008", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_008);
      expect(result).toBe("DKBS_006_008");
    });

    it("returns 'DKBS_006_007_008' add on is DKBS_006_007_008", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(
        CarInsuranceAddOn.DKBS_006_007_008
      );
      expect(result).toBe("DKBS_006_007_008");
    });

    it("returns 'DKBS_003_006_007' add on is DKBS_003_006_007", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(
        CarInsuranceAddOn.DKBS_003_006_007
      );
      expect(result).toBe("DKBS_003_006_007");
    });

    it("returns 'DKBS_003_006_007' add on is DKBS_003_006_007_008", () => {
      const controller = new CarInsuranceRequestController();
      const result = controller.getAddOnLabel(
        CarInsuranceAddOn.DKBS_003_006_007_008
      );
      expect(result).toBe("DKBS_003_006_007_008");
    });
  });
});

function getAllAddOnRadios() {
  const controller = new CarInsuranceRequestController();

  return [
    {
      text: "Không",
      value: CarInsuranceAddOn.NONE
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
      value: CarInsuranceAddOn.DKBS_006
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007),
      value: CarInsuranceAddOn.DKBS_006_007
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_008),
      value: CarInsuranceAddOn.DKBS_006_008
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007_008),
      value: CarInsuranceAddOn.DKBS_006_007_008
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007),
      value: CarInsuranceAddOn.DKBS_003_006_007
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007_008),
      value: CarInsuranceAddOn.DKBS_003_006_007_008
    }
  ];
}
