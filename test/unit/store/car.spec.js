import { state, mutations, actions, getters } from "@/store/car";
import CarInsuranceRequest, {
  CarYearThreshold,
  CarInsuranceAddOn
} from "@/controller/car-insurance-request";

describe("store/car", () => {
  let _state;

  beforeEach(() => {
    _state = state();
  });

  describe("getters", () => {
    it("insuranceRequest() returns all keys from state but 'controller'", () => {
      const insuranceRequest = getters.insuranceRequest(_state);
      const expected = {
        carValue: 0,
        carYearThreshold: "Dưới 3 năm",
        addons: [],
        insuranceCompany: "",
        insuranceValue: "",
        name: "",
        email: "",
        phone: "",
        note: ""
      };
      expect(insuranceRequest).toMatchObject(expected);
      expect(insuranceRequest.controller).toBe(undefined);
    });
  });

  describe("mutations", () => {
    it("setCarValue() updates state.carValue", () => {
      expect(_state.carValue).toBe(0);
      mutations.setCarValue(_state, 1);
      expect(_state.carValue).toBe(1);
    });

    it("setCarYearThreshold() updates state.carYearThreshold", () => {
      expect(_state.carYearThreshold).toBe(
        CarYearThreshold.LESS_THAN_OR_EQUAL_3_YEARS
      );
      mutations.setCarYearThreshold(_state, CarYearThreshold.FROM_3_TO_6_YEARS);
      expect(_state.carYearThreshold).toBe(CarYearThreshold.FROM_3_TO_6_YEARS);
    });

    it("setAddons() updates state.addons", () => {
      expect(_state.addons).toEqual([]);
      mutations.setAddons(_state, [CarInsuranceAddOn.OPTION_1]);
      expect(_state.addons).toEqual([CarInsuranceAddOn.OPTION_1]);
    });

    it("setInsuranceCompany() updates state.insuranceCompany", () => {
      expect(_state.insuranceCompany).toBe("");
      mutations.setInsuranceCompany(_state, "PVI");
      expect(_state.insuranceCompany).toBe("PVI");
    });

    it("setInsuranceValue() updates state.insuranceValue", () => {
      expect(_state.insuranceValue).toBe("");
      mutations.setInsuranceValue(_state, "PVI");
      expect(_state.insuranceValue).toBe("PVI");
    });

    it("setName() updates state.name", () => {
      expect(_state.name).toBe("");
      mutations.setName(_state, "Nguyen Van A");
      expect(_state.name).toBe("Nguyen Van A");
    });

    it("setEmail() updates state.email", () => {
      expect(_state.email).toBe("");
      mutations.setEmail(_state, "test@gmail.com");
      expect(_state.email).toBe("test@gmail.com");
    });

    it("setPhone() updates state.phone", () => {
      expect(_state.phone).toBe("");
      mutations.setPhone(_state, "01234");
      expect(_state.phone).toBe("01234");
    });

    it("setNote() updates state.note", () => {
      expect(_state.note).toBe("");
      mutations.setNote(_state, "dummy note");
      expect(_state.note).toBe("dummy note");
    });
  });

  describe("actions", () => {
    it("saveRequest() saves request information from getters", async () => {
      const mockSave = jest.fn();
      expect(_state.controller.save).not.toBe(undefined);
      _state.controller.save = mockSave;

      const insuranceRequest = { key: "value" };
      const getters = {
        insuranceRequest
      };

      await actions.saveRequest({ state: _state, getters });

      expect(mockSave).toHaveBeenCalledTimes(1);
      expect(mockSave).toHaveBeenCalledWith(insuranceRequest);
    });

    it("setCarValue() commits 'setCarValue' with passed argument", () => {
      const commit = jest.fn();
      actions.setCarValue({ commit }, 69);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setCarValue", 69);
    });

    it("setCarYearThreshold() commits 'setCarYearThreshold' with passed argument", () => {
      const commit = jest.fn();
      actions.setCarYearThreshold({ commit }, 1);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setCarYearThreshold", 1);
    });

    it("setAddons() commits 'setAddons' with passed argument", () => {
      const commit = jest.fn();
      actions.setAddons({ commit }, [1, 2]);
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setAddons", [1, 2]);
    });

    it("setName() commits 'setName' with passed argument", () => {
      const commit = jest.fn();
      actions.setName({ commit }, "name");
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setName", "name");
    });

    it("setEmail() commits 'setEmail' with passed argument", () => {
      const commit = jest.fn();
      actions.setEmail({ commit }, "email@gmail.com");
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setEmail", "email@gmail.com");
    });

    it("setPhone() commits 'setPhone' with passed argument", () => {
      const commit = jest.fn();
      actions.setPhone({ commit }, "012345");
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setPhone", "012345");
    });

    it("setNote() commits 'setNote' with passed argument", () => {
      const commit = jest.fn();
      actions.setNote({ commit }, "note");
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith("setNote", "note");
    });
  });
});
