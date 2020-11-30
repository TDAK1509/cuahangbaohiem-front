import { shallowMount } from "@vue/test-utils";
import ResultMic from "@/components/xe/tinh-phi/ResultMic.vue";
import MockDate from "mockdate";

describe("ResultMic.vue", () => {
  describe("Insurance Value", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    const thisYear = new Date().getFullYear();

    describe("carValue is < 500", () => {
      const carValue = 400;

      it("given carYear's gap from today <= 3, returns 1.23% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.23) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.3% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.3) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.38% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.38) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("500 <= carValue < 700", () => {
      const carValue = 600;

      it("given carYear's gap from today <= 3, returns 1.23% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.23) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.3% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.3) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.38% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.38) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("carValue >= 700", () => {
      const carValue = 800;

      it("given carYear's gap from today <= 3, returns 1.23% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.23) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.3% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.3) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.38% carValue", () => {
        const wrapper = shallowMount(ResultMic, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.38) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });
  });
});
