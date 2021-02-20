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
    it("enable all radios if yearGap < 3", () => {
      const expectedAddons = getDefaultAddOnRadios();
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(3);
      expect(addons).toEqual(expectedAddons);
    });

    it("enable all radios if 3 < yearGap <= 6", () => {
      const expectedAddons = getDefaultAddOnRadios();
      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(4);
      expect(addons).toEqual(expectedAddons);
    });

    it("disable the last 2 radios if 6 < yearGap <= 10", () => {
      const expectedAddons = getDefaultAddOnRadios();
      expectedAddons[expectedAddons.length - 1].disabled = true;
      expectedAddons[expectedAddons.length - 2].disabled = true;

      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(7);
      expect(addons).toEqual(expectedAddons);
    });

    it("only enable NONE & DKBS_006 if 10 < yearGap <= 15", () => {
      const expectedAddons = getDefaultAddOnRadios();
      expectedAddons.forEach((addon) => {
        if (
          addon.value !== CarInsuranceAddOn.NONE &&
          addon.value !== CarInsuranceAddOn.DKBS_006
        ) {
          addon.disabled = true;
        }
      });

      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(11);
      expect(addons).toEqual(expectedAddons);
    });

    it("only enable NONE addon if 15 < yearGap <= 20", () => {
      const expectedAddons = getDefaultAddOnRadios();
      expectedAddons.forEach((addon) => {
        if (addon.value !== CarInsuranceAddOn.NONE) {
          addon.disabled = true;
        }
      });

      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(16);
      expect(addons).toEqual(expectedAddons);
    });

    it("only enable NONE addon if yearGap > 20", () => {
      const expectedAddons = getDefaultAddOnRadios();
      expectedAddons.forEach((addon) => {
        if (addon.value !== CarInsuranceAddOn.NONE) {
          addon.disabled = true;
        }
      });

      const controller = new CarInsuranceRequestController();
      const addons = controller.getAddOnRadios(21);
      expect(addons).toEqual(expectedAddons);
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

function getDefaultAddOnRadios() {
  const controller = new CarInsuranceRequestController();

  return [
    {
      text: "Không",
      value: CarInsuranceAddOn.NONE,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006),
      value: CarInsuranceAddOn.DKBS_006,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007),
      value: CarInsuranceAddOn.DKBS_006_007,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_008),
      value: CarInsuranceAddOn.DKBS_006_008,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_006_007_008),
      value: CarInsuranceAddOn.DKBS_006_007_008,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007),
      value: CarInsuranceAddOn.DKBS_003_006_007,
      disabled: false
    },
    {
      text: controller.getAddOnLabel(CarInsuranceAddOn.DKBS_003_006_007_008),
      value: CarInsuranceAddOn.DKBS_003_006_007_008,
      disabled: false
    }
  ];
}
