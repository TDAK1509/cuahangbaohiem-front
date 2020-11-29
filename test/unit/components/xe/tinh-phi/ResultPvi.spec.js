import { shallowMount } from "@vue/test-utils";
import ResultPvi from "@/components/xe/tinh-phi/ResultPvi.vue";
import MockDate from "mockdate";

describe("ResultPvi.vue", () => {
  describe("Insurance Value", () => {
    beforeAll(() => {
      MockDate.set(new Date(2020, 1, 1));
    });

    const thisYear = new Date().getFullYear();

    describe("carValue is < 500", () => {
      const carValue = 400;

      it("given carYear's gap from today <= 3, returns 1.7% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.7) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 2.05% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 2.05) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 2.35% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 2.35) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("500 <= carValue < 700", () => {
      const carValue = 600;

      it("given carYear's gap from today <= 3, returns 1.45% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.45) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.74% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.74) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 2% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 2) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });

    describe("carValue >= 700", () => {
      const carValue = 800;

      it("given carYear's gap from today <= 3, returns 1.28% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 3
          }
        });
        const expectInsuranceValue = (carValue * 1.28) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today > 3 & <=6, returns 1.54% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 4
          }
        });
        const expectInsuranceValue = (carValue * 1.54) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });

      it("given carYear's gap from today >= 6, returns 1.76% carValue", () => {
        const wrapper = shallowMount(ResultPvi, {
          propsData: {
            carValue,
            carYear: thisYear - 7
          }
        });
        const expectInsuranceValue = (carValue * 1.76) / 100;
        expect(wrapper.vm.insuranceValue).toBe(expectInsuranceValue);
      });
    });
  });
});
