import { shallowMount } from "@vue/test-utils";
import ResultBaoMinh from "@/components/insurance/car/ResultBaoMinh.vue";
import MockDate from "mockdate";

describe("ResultBaoMinh.vue", () => {
  describe("Insurance Value", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    const thisYear = new Date().getFullYear();

    describe("carValue is < 500", () => {
      const carValue = 400;

      it("given carYear's gap from today <= 3, returns 1.52% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.52) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.774% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.774) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.906% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.906) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("500 <= carValue < 700", () => {
      const carValue = 600;

      it("given carYear's gap from today <= 3, returns 1.443% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.443) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.675% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.675) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.807% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.807) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("carValue >= 700", () => {
      const carValue = 800;

      it("given carYear's gap from today <= 3, returns 1.443% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.443) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.675% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.675) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.807% carValue", () => {
        const wrapper = shallowMount(ResultBaoMinh, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.807) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });
  });
});
